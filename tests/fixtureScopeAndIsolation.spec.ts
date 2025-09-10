import { test as base } from '@playwright/test'

type TestFixtures = {
    counterFixture: any
};

let counter = 0

const test = base.extend<TestFixtures>({
	counterFixture: [async ({}, use) => {
		counter++
		await use(counter)
	},
    {scope: 'test'}]
})

// command to run so that only 1 worker is used:
//        -> npx playwright test tests/fixtureScopeAndIsolation.spec.ts --workers=1
//        -> output : 1 2 3

// change scope to 'worker' and run the same command again
//        -> output : 1 1 1

test("Test 1", async ({ counterFixture }) => {
	console.log(`Test 1 Counter: ${counterFixture}`);
});

test("Test 2", async ({ counterFixture }) => {
	console.log(`Test 2 Counter: ${counterFixture}`);
});

test("Test 3", async ({ counterFixture }) => {
	console.log(`Test 3 Counter: ${counterFixture}`);
});