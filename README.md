<p align="center">
    <img src="./src/assets/pastel-logo.svg" alt="Pastel Logo" width="200" height="200" />
</p>

* To run this project locally, follow the steps below:

* Install the project dependencies.
  ```
  npm run install
  ```

* In the root folder of the project, create a `.env` file and add the following values.
  ```
  NEXT_PUBLIC_ASSET_URL=http://localhost:9090/v1/api/
  ```

* Before starting the application in development mode make sure to confirm the backend is running on PORT=9090. To confirm this please     paste   the following in your browser, this should display the swagger documentation.
  ```
  http://localhost:9090/api-docs#/
  ```


* Start the application in development mode.
  ```
  npm run dev
  ```
