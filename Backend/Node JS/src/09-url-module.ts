function runUrlDemo(): void {
    const apiURL = new URL(
        "https://api.acedev.com/users?page=2&limit=10&sort=latest"
    );

    console.log(
        apiURL.href,
        apiURL.protocol,
        apiURL.hostname,
        apiURL.host,
        apiURL.search,
        apiURL.pathname
    );

    // search params
    const page = apiURL.searchParams.get('page') // 2
    const limit = apiURL.searchParams.get('limit') // 10
    const sort = apiURL.searchParams.get('sort') // latest

    console.log(page, limit, sort);
       
};

runUrlDemo();

/*

| Property   | Your output                                                | Meaning                       |
| ---------- | ---------------------------------------------------------- | ----------------------------- |
| `href`     | `https://api.acedev.com/users?page=2&limit=10&sort=latest` | Complete URL                  |
| `protocol` | `https:`                                                   | Protocol being used           |
| `hostname` | `api.acedev.com`                                           | Domain/host name              |
| `host`     | `api.acedev.com`                                           | Hostname + port if one exists |
| `search`   | `?page=2&limit=10&sort=latest`                             | Query string                  |
| `pathname` | `/users`                                                   | Path of the resource          |


*/