const love = () => {
  const name1 = document.getElementById("name1").value;
  const name2 = document.getElementById("name2").value;
  if (name1.length <= 2 || name2.length <= 2) {
    alert("Enter at least 3 characters for both names.");
    return;
  }
  const combinedString = name1 + name2;
  const lowerCaseString = combinedString.toLowerCase();

  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < lowerCaseString.length; i++) {
    if (
      lowerCaseString[i] === "t" ||
      lowerCaseString[i] === "r" ||
      lowerCaseString[i] === "u" ||
      lowerCaseString[i] === "e"
    ) {
      count1++;
    }
    if (
      lowerCaseString[i] === "l" ||
      lowerCaseString[i] === "o" ||
      lowerCaseString[i] === "v" ||
      lowerCaseString[i] === "e"
    ) {
      count2++;
    }
  }
  const loveScore = (count1 * 10 + count2).toString() + "%";

  alert("Your love score is: " + loveScore);
};
