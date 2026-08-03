const BASE_URL = "http://localhost:3000";

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

export async function loginUser(email, password) {
  const response = await fetch(`${BASE_URL}/users`);

  if (!response.ok) {
    throw new Error("Unable to connect to the server.");
  }

  const users = await response.json();

  const user = users.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password === password,
  );

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  return user;
}
