export function checkResponse(response: any) {
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}
