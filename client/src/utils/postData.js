async function postData(url, data,token) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
    },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
        console.log(result.message);
        throw new Error(result.message);
    }
    return result;
}

export default postData;