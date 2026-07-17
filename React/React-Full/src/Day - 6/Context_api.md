Data centralization means keep all the data in one place so any one can go there and access the data.

To understand context API we need to understand 

1. Context --> creating context
2. Provide Data ---> once created providing context
3. Use Context Data ----> using the provided context

we wrap our entire app with the context api so when ever any data is need to the app it just have to go the it and take instead of wait for any other components to pass it for the app.

createContext() creates the container, Provider stores and shares the data, and useContext() allows any child component to read or update that shared data.