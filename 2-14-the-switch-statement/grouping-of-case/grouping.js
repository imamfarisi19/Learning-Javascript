let a = 3;

switch (a) {
	case 4:
		alert('Right!');
		break;

	case 3: // (*) grouped two cases
	case 5:
		alert('Wrong!');
		alert("Why don't you take a math class?");
		break;
	
	default:
		alert('The result is strange. Really.');
}
