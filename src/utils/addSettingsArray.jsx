export const addSettingsArray=[
    {
        label: "Recheck Time",
        name : ["recheckTime"],
        rules: [
            {
              required: true,
              type: "number",
            },
          ],

    },
        {
        label: "Número de válvulas",
        name : ["valvesNumber"],
        rules: [
            {
              required: true,
              type: "number",
            },
          ],

    },
    {
        label: "delayTime",
        name : ["delayTime"],
        rules: [
            {
              required: true,
              type: "number",
            },
          ],

    },
]