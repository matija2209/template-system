export default function getContrastColor(hexcolor: string) {
  // Remove the hash at the start if it's there
  if (!hexcolor) {
    console.log("No hexcolor provided to getContrastColor() function");
    return "white";
  }
  hexcolor = hexcolor.replace("#", "");
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  // YIQ value determines whether the color is light or dark
  // This threshold can be adjusted if necessary
  return yiq >= 128 ? "black" : "white";
}
