export async function getPosts() {
  const response = await fetch("");

  if (!response.ok) {
    throw new Error("Failed to load Posts");
  }

  return response.json();
}
