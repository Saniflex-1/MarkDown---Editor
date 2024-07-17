import BlockParagraph from "../ui/BlockParagraph";
import Paragraph from "../ui/Paragraph";

// Function to parse markdown text
export const parseMarkdown = (
  text: string,
  isDark?: boolean
): JSX.Element[] => {
  const lines = text.split("\n");
  const elements: JSX.Element[] = [];
  let currentParagraph = "";
  let inSeaBlueDiv = false;

  const pushParagraph = () => {
    if (currentParagraph) {
      if (inSeaBlueDiv) {
        elements.push(
          <BlockParagraph $isDark={isDark} key={elements.length}>
            {currentParagraph}
          </BlockParagraph>
        );
      } else {
        elements.push(
          <Paragraph $isDark={isDark} key={elements.length}>
            {currentParagraph}
          </Paragraph>
        );
      }
      currentParagraph = "";
      inSeaBlueDiv = false;
    }
  };

  
  });

  pushParagraph();
  return elements;
};

// Function to format the date
export function formatDate(): string {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return ` ${day} ${month} ${year}`;
}

export function generateUniqueId(): string {
  const timestamp = Date.now(); // Current timestamp in milliseconds
  const randomNum = Math.random().toString(36).substring(2, 12); // Random alphanumeric string
  // Example output: "1688159163035-1d7kh9fsd7"
  return `${timestamp}-${randomNum}`;
}
