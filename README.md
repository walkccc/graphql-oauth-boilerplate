# GraphQL OAuth Boilerplate

1.  Setup the Google and GitHub applications to login by OAuth 2.0
2.  Setup MongoDB to store users
3.  In `server/.env`, you should specify the following environment variables:

    ```
    DB_USER=user_001
    DB_USER_PASSWORD=k4U9F8CAL7ZLlo2K
    DB_CLUSTER=cluster0.3dbra
    GITHUB_CLIENT_ID=4b720dcceadacf37c7b7
    GITHUB_CLIENT_SECRET=71e5c0e1d3c1fe42c5ebe5b6b16e2ee9fa5a1ebc
    GOOGLE_CLIENT_ID=957583976653-45ie8bugvuq9ekao9cneg501eg4ah6su.apps.googleusercontent.com
    GOOGLE_CLIENT_SECRET=zACag4Dh1etf4KdXBRs-_NQ_
    NODE_ENV=dev
    PORT=8000
    PUBLIC_URL=http://localhost:3000
    SECRET=this-is-a-secret
    ```

4.  Install node dependencies:

    - Server:

      ```bash
      cd server
      yarn install
      yarn start
      ```

    - Client:

      ```bash
      cd client
      yarn install
      yarn start
      ```

5.  After `http://localhost:8000/api` is running, generate the required types in the client:

    ```bash
    cd client
    yarn codegen:schema
    yarn codegen:generate
    ```
