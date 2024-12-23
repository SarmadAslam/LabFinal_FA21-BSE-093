import axios from "axios";

export const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    try {
        const response = await axios.get(url);
        console.log("Data fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        return [];
    }
};
