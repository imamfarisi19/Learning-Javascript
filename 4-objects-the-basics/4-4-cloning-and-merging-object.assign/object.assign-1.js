let user = { name: "John "};

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permission1 and permission2 into user
object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: "true", canEdit: "true" };

