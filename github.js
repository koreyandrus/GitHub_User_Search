class GitHub {
    constructor() {
        this.client_id = '3b0d3a3200e94b08a807';
        this.client_secret = '5f31c976a1a9c9e4fd760c892e83983cbf7e6e00';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await reposResponse.json();
        return {
            profile,
            repos
        }
    }
}