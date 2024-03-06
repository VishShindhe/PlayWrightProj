import {expect, test} from "@playwright/test";

test("GET api demo", async({request}) :Promise <void> =>{
    
    const response = await request.get("https://reqres.in/api/users/2");
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.email).toBe("janet.weaver@reqres.in");
    expect(responseBody.data.avatar).toBe("https://reqres.in/img/faces/2-image.jpg");
});

test("POST api demo", async({request}) :Promise <void> => {
    const response = await request.post("https://reqres.in/api/users", {
        data: {
            name: "MichaelScot",
            job: "regionalManager"
        },
        timeout: 10000,
        headers: {
            "Content-Type": "application/json"
        }

    });

    expect(response.status()).toBe(201);
    const json = await response.json();
    expect(json).toStrictEqual(expect.objectContaining({
        name: "MichealScot",
        job: "regionalManager",
        id: expect.any(String),
        createdAt: expect.any(String)
    }))
});