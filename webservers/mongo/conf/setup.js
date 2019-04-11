db = db.getSiblingDB('first_db');  // 创建一个名为"newDB"的DB
db.createUser(  // 创建一个名为"shon"的用户，设置密码和权限
    {
        user: "www",
        pwd: "www",
        roles: [
            { role: "dbOwner", db: "first_db"}
        ]
    }
);
db.createCollection("newCollection");