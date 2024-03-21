import { test as myTest } from "@playwright/test";

type empl = {
    age: number,
    email: string
}

const myFixtureTest = myTest.extend<empl>({
    age:30,
    email: "emp1@test.com"
})

export const test = myFixtureTest;
