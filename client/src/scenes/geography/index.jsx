import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useGetGeographyQuery } from "state/api";
import Header from "components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "state/geoData";

const Geography = () => {
  const theme = useTheme();
  const { data } = useGetGeographyQuery();
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="GEOGRAPHY" subtitle="Find where your users are located" />
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {data ? (
          <ResponsiveChoropleth
            data={data}
            colors={theme.palette.mode === "dark" ? "purples" : "PuRd"}
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            domain={[0, 60]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={150}
            projectionTranslation={[0.45, 0.6]}
            projectionRotation={[0, 0, 0]}
            borderWidth={0.5}
            borderColor="#22364e"
            theme={{
              tooltip: {
                container: {
                  color: "	#222222",
                  backgroundColor: "#f8ede3",
                },
              },
            }}
            legends={
              isNonMobile
                ? [
                    {
                      anchor: "bottom-right",
                      direction: "column",
                      justify: true,
                      translateX: 0,
                      translateY: -125,
                      itemsSpacing: 0,
                      itemWidth: 94,
                      itemHeight: 18,
                      itemDirection: "left-to-right",
                      itemTextColor: theme.palette.neutral.main,
                      itemOpacity: 0.85,
                      symbolSize: 18,
                    },
                  ]
                : []
            }
          />
        ) : (
          <>Loading...</>
        )}
      </Box>
    </Box>
  );
};

export default Geography;
