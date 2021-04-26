class GitHub {
    constructor() {
        this.client_id = '3b0d3a3200e94b08a807';
        this.client_secret = '2078ff2d30619aec3e4825946408cc7571d4124b';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}