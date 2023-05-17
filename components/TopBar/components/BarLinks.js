import Link from "next/link";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

// ---------------------------------------------------- //

function BarLinks() {
  const router = useRouter();

  // ******************************* //

  const SingleLink = ({ href, label }) => {
    return (
      <Link href={href}>
        <h4
          style={{
            fontFamily:
              router.pathname === href
                ? "HeaderFontBold"
                : "HeaderFont",
          }}
        >
          {label}
        </h4>
      </Link>
    );
  };

  // *********** RETURN ************ //

  return (
    <Box display="flex" gap={5} p={2}>
      <SingleLink href="/run-analysis" label="Analyze" />
      <SingleLink
        href="/analysis-library"
        label="Library"
      />
    </Box>
  );
}

export default BarLinks;
