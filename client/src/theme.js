// color design tokens export
export const tokensDark = {
  base: {
    0: "#F8EDE3", //pinky cream
    50: "#DFD3C3", //milky coffe
  },
  primary: {
    400: "#F5F5F5", //light grey
    500: "#434242", //mid grey
    600: "#222222", //dark grey
  },
  secondary: {
    100: "#fff6e0", //cream
    200: "#5c3d4d", //dark purple
    500: "#85586F", //mid purple
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[500],
            },
            neutral: {
              ...tokensDark.base,
              main: tokensDark.base[50],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.base[50],
              light: tokensDark.base[0],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.base[50],
              light: tokensDark.primary[600],
            },
            neutral: {
              ...tokensLight.base,
              main: tokensDark.secondary[500],
            },
            background: {
              default: tokensDark.base[0],
              alt: tokensDark.base[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
