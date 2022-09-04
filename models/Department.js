class Department extends BaseEntity {
    constructor(dbConnection) {
        super(dbConnection);
    }

    findById() {
        return super.findById('*', 'departments', id);
    }
}