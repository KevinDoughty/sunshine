// From the old Apple demo code GLSLEditorSample trackball.c

const  kTol = 0.001;
const kRad2Deg = 180.0 / Math.PI;
const kDeg2Rad = Math.PI / 180.;

let gRadiusTrackball;
let gStartPtTrackball = [0,0,0]; // 3
let gEndPtTrackball = [0,0,0]; // 3
let gXCenterTrackball = 0;
let gYCenterTrackball = 0;

export function startTrackball(x, y, originX, originY, width, height) {
	//console.log("start x:%s; y:%s; ox:%s; oy:%s; w:%s; h:%s;",x,y,originX,originY,width,height);
	/* Start up the trackball.  The trackball works by pretending that a ball
	   encloses the 3D view.  You roll this pretend ball with the mouse.  For
	   example, if you click on the center of the ball and move the mouse straight
	   to the right, you roll the ball around its Y-axis.  This produces a Y-axis
	   rotation.  You can click on the "edge" of the ball and roll it around
	   in a circle to get a Z-axis rotation.
	   
	   The math behind the trackball is simple: start with a vector from the first
	   mouse-click on the ball to the center of the 3D view.  At the same time, set the radius
	   of the ball to be the smaller dimension of the 3D view.  As you drag the mouse
	   around in the 3D view, a second vector is computed from the surface of the ball
	   to the center.  The axis of rotation is the cross product of these two vectors,
	   and the angle of rotation is the angle between the two vectors.
	 */

	// Figure the center of the view.
	gXCenterTrackball = originX + width * 0.5;
	gYCenterTrackball = originY + height * 0.5;
	gRadiusTrackball = Math.min(width,height) / 2;
	
	// Compute the starting vector from the surface of the ball to its center.
	gStartPtTrackball[0] = x - gXCenterTrackball;
	gStartPtTrackball[1] = y - gYCenterTrackball;
	const xxyy = gStartPtTrackball [0] * gStartPtTrackball[0] + gStartPtTrackball [1] * gStartPtTrackball [1];
	if (xxyy > gRadiusTrackball * gRadiusTrackball) {
		// Outside the sphere.
		gStartPtTrackball[2] = 0.0;
	} else gStartPtTrackball[2] = Math.sqrt(gRadiusTrackball * gRadiusTrackball - xxyy);
}
	
	
// update to new mouse position, output rotation angle
export function rollToTrackball(x,y, rot) { // rot is output rotation angle
	//console.log("rollToTrackball x:%s; y:%s; rot:%s;",x,y,JSON.stringify(rot));
	//console.log("pre:%s;",JSON.stringify(rot));
	//var rot = [0,0,0,0];
	//console.log("center x:%s; y:%s;",gXCenterTrackball,gYCenterTrackball);
	//console.log("startPt x:%s; y:%s;",gStartPtTrackball[0],gStartPtTrackball[1]);
	//console.log("endPt x:%s; y:%s;",gEndPtTrackball[0],gEndPtTrackball[1]);
	
	//console.log("*** rollToTrackball pre:%s;",JSON.stringify(rot));
	
	gEndPtTrackball[0] = x - gXCenterTrackball;
	gEndPtTrackball[1] = y - gYCenterTrackball;

	//console.log("start x:%s; y:%s; end x:%s; y:%s;",gStartPtTrackball[0],gStartPtTrackball[1],gEndPtTrackball[0],gEndPtTrackball[1]);

	if (Math.abs (gEndPtTrackball[0] - gStartPtTrackball[0]) < kTol && Math.abs(gEndPtTrackball[1] - gStartPtTrackball[1]) < kTol) return; // Not enough change in the vectors to have an action.

	// Compute the ending vector from the surface of the ball to its center.
	const xxyy = gEndPtTrackball[0] * gEndPtTrackball[0] + gEndPtTrackball[1] * gEndPtTrackball[1];
	if (xxyy > gRadiusTrackball * gRadiusTrackball) { // Outside the sphere.
		gEndPtTrackball[2] = 0.0;
	} else {
		gEndPtTrackball[2] = Math.sqrt(gRadiusTrackball * gRadiusTrackball - xxyy);
	}
	//console.log("mid a:%s;",JSON.stringify(rot));

	// Take the cross product of the two vectors. r = s X e
	rot[1] = -gStartPtTrackball[1] * gEndPtTrackball[2] + gStartPtTrackball[2] * gEndPtTrackball[1];
	rot[2] = -gStartPtTrackball[0] * gEndPtTrackball[2] + gStartPtTrackball[2] * gEndPtTrackball[0];
	rot[3] = -gStartPtTrackball[0] * gEndPtTrackball[1] + gStartPtTrackball[1] * gEndPtTrackball[0];
	
	// Use atan for a better angle.  If you use only cos or sin, you only get
	// half the possible angles, and you can end up with rotations that flip around near
	// the poles.
	//console.log("mid b:%s;",JSON.stringify(rot));
	// cos(a) = (s . e) / (||s|| ||e||)
	
// 	let ls = Math.sqrt(gStartPtTrackball[0] * gStartPtTrackball[0] + gStartPtTrackball[1] * gStartPtTrackball[1] + gStartPtTrackball[2] * gStartPtTrackball[2]);
// 	if (ls) ls = 1 / ls; // 1 / ||s||
// 	let le = Math.sqrt(gEndPtTrackball[0] * gEndPtTrackball[0] + gEndPtTrackball[1] * gEndPtTrackball[1] + gEndPtTrackball[2] * gEndPtTrackball[2]);
// 	if (le) le = 1 / le; // 1 / ||e||
// 	const cosAng = gStartPtTrackball[0] * gEndPtTrackball[0] + gStartPtTrackball[1] * gEndPtTrackball[1] + gStartPtTrackball[2] * gEndPtTrackball[2] * ls * le;


	let cosAng = gStartPtTrackball[0] * gEndPtTrackball[0] + gStartPtTrackball[1] * gEndPtTrackball[1] + gStartPtTrackball[2] * gEndPtTrackball[2]; // (s . e)
	let ls = Math.sqrt(gStartPtTrackball[0] * gStartPtTrackball[0] + gStartPtTrackball[1] * gStartPtTrackball[1] + gStartPtTrackball[2] * gStartPtTrackball[2]);
	if (ls) ls = 1.0 / ls; // 1 / ||s||
	let le = Math.sqrt(gEndPtTrackball[0] * gEndPtTrackball[0] + gEndPtTrackball[1] * gEndPtTrackball[1] + gEndPtTrackball[2] * gEndPtTrackball[2]);
	if (le) le = 1.0 / le; // 1 / ||e||
	cosAng = cosAng * ls * le;
	//console.log("mid c:%s;",JSON.stringify(rot));
	
	// sin(a) = ||(s X e)|| / (||s|| ||e||)
	let lr = Math.sqrt(rot[1] * rot[1] + rot[2] * rot[2] + rot[3] * rot[3]); // ||(s X e)||;
								// keep this length in lr for normalizing the rotation vector later.
	//console.log("lr:%s; ls:%s; le:%s;",lr,ls,le);
	const sinAng = lr * ls * le;
	//console.log("sinAng:%s;",sinAng);
	rot[0] = Math.atan2(sinAng, cosAng) * kRad2Deg; // GL rotations are in degrees.
	//console.log("mid d:%s;",JSON.stringify(rot));
	//console.log("sin:%s; cos:%s; const:%s; result:%s;",sinAng,cosAng,kRad2Deg,rot[0]);
	
	// Normalize the rotation axis.
	if (lr) lr = 1 / lr;
	rot[1] *= lr; 
	rot[2] *= lr; 
	rot[3] *= lr;
	
	//console.log("*** rollToTrackball result:%s;",JSON.stringify(rot));
	
	// returns rotate
	return rot;
}

function rotation2Quat(A, q) {
	// Convert a GL-style rotation to a quaternion.  The GL rotation looks like this:
	// {angle, x, y, z}, the corresponding quaternion looks like this:
	// {{v}, cos(angle/2)}, where {v} is {x, y, z} / sin(angle/2).
	
	const ang2 = A[0] * kDeg2Rad * 0.5;  // The half angle // Convert from degrees ot radians, get the half-angle.
	const sinAng2 = Math.sin(ang2); // sin(half-angle)
	q[0] = A[1] * sinAng2; 
	q[1] = A[2] * sinAng2; 
	q[2] = A[3] * sinAng2;
	q[3] = Math.cos(ang2);
}
export function addToRotationTrackball(dA, A) {
	const q0 = [], q1 = [], q2 = [];
	// Figure out A' = A . dA
	// In quaternions: let q0 <- A, and q1 <- dA.
	// Figure out q2 = q1 + q0 (note the order reversal!).
	// A' <- q3.
	
	rotation2Quat(A, q0);
	rotation2Quat(dA, q1);
	
	// q2 = q1 + q0;
	q2[0] = q1[1]*q0[2] - q1[2]*q0[1] + q1[3]*q0[0] + q1[0]*q0[3];
	q2[1] = q1[2]*q0[0] - q1[0]*q0[2] + q1[3]*q0[1] + q1[1]*q0[3];
	q2[2] = q1[0]*q0[1] - q1[1]*q0[0] + q1[3]*q0[2] + q1[2]*q0[3];
	q2[3] = q1[3]*q0[3] - q1[0]*q0[0] - q1[1]*q0[1] - q1[2]*q0[2];
	// Here's an excersize for the reader: it's a good idea to re-normalize your quaternions
	// every so often.  Experiment with different frequencies.
	
	// An identity rotation is expressed as rotation by 0 about any axis.
	// The "angle" term in a quaternion is really the cosine of the half-angle.
	// So, if the cosine of the half-angle is one (or, 1.0 within our tolerance),
	// then you have an identity rotation.
	//const tolerance = 1.0e-7;
	//console.log("addToRotation Q 0:%s; 1:%s; 2:%s; 3:%s;",q2[0],q2[1],q2[2],q2[3]);
	// addToRotation Q 0:0.001764; 1:0.000001; 2:-0.000025; 3:0.999998;
	// addToRotation Q 0:-0.627184; 1:-0.006311; 2:0.008951; 3:0.778794;
	
	// addToRotation Q 0:-0.00010275132114833697; 1:-1.2122695925889403e-8; 2:0.000001193072591482393; 3:0.9999999947203712;
	// addToRotation Q 0:-0.999627808703512; 1:0.022560026840971574; 2:0.015338682007079734; 3:0.00011870061204220369;
	
	const tolerance = 0.0000001;
	const testValue = Math.abs(q2[3] - 1.0);
	if (testValue < tolerance) {
		//console.log("????? addToRotationTrackball IDENTITY:%s;",testValue);
		// Identity rotation.
		A[0] = 0.0;
		A[1] = 1.0;
		A[2] = 0.0;
		A[3] = 0.0;
		return;
	}
	
	// If you get here, then you have a non-identity rotation.  In non-identity rotations,
	// the cosine of the half-angle is non-0, which means the sine of the angle is also
	// non-0.  So we can safely divide by sin(theta2).
	
	// Turn the quaternion back into an {angle, {axis}} rotation.
	const theta2 = Math.acos(q2[3]);
	const sinTheta2 = (1.0 /  Math.sin( theta2));
	A[0] = theta2 * 2.0 * kRad2Deg;
	A[1] = q2[0] * sinTheta2;
	A[2] = q2[1] * sinTheta2;
	A[3] = q2[2] * sinTheta2;
	//console.log("????? addToRotation result:%s;",JSON.stringify(A));
	
// 	dA[0] = 0.0;
// 	dA[1] = 0.0;
// 	dA[2] = 0.0;
// 	dA[3] = 0.0;
}