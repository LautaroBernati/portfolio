export function numberToRgb(progress: number): string {
  const red = Math.min(255, Math.round((100 - progress) * 255 / 50)); // Red component
  const green = Math.min(200, Math.round((progress) * 200 / 50)); // Green component

  return `rgb(${red}, ${green}, 0)`;
}
