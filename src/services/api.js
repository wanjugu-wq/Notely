const BASE_URL = "http://localhost:3001";

export async function registerUser(user) {
  const usersResponse = await fetch(`${BASE_URL}/users`);
  const users = await usersResponse.json();

  const exists = users.find(
    (u) => u.email.toLowerCase() === user.email.toLowerCase(),
  );

  if (exists) {
    throw new Error("An account with this email already exists.");
  }

  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Registration failed.");
  }

  return response.json();
}
