class SharedState {
    private static instance: SharedState;

    // User credentials
    public username: string;
    public firstName: string;
    public lastName: string;
    public password: string;
    
    // Test data
    public currentCarModel: string;
    public voteCount: number;

    private constructor() {
        this.username = '';
        this.firstName = '';
        this.lastName = '';
        this.password = '';
        this.currentCarModel = '';
        this.voteCount = 0;
    }

    public static getInstance(): SharedState {
        if (!SharedState.instance) {
            SharedState.instance = new SharedState();
        }
        return SharedState.instance;
    }

    /**
     * Set user registration data
     */
    public setUserData(username: string, firstName: string, lastName: string, password: string) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }

    /**
     * Set current car model being tested
     */
    public setCarModel(carModel: string) {
        this.currentCarModel = carModel;
    }

    /**
     * Set vote count for assertions
     */
    public setVoteCount(count: number) {
        this.voteCount = count;
    }

    /**
     * Reset all state - useful for test cleanup
     */
    public reset() {
        this.username = '';
        this.firstName = '';
        this.lastName = '';
        this.password = '';
        this.currentCarModel = '';
        this.voteCount = 0;
    }
}

export default SharedState;