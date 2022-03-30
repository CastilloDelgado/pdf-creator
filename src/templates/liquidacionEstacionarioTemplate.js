module.exports = {
  content: [
    {
      // HEADER
      columns: [
        [
          { text: "GASPAZA MAZATLAN, SIN.\n", style: "bigBoldLabel" },
          {
            text: [
              {
                text: "Periodo de Nómina: ",
                style: "simpleBoldLabel",
              },
              {
                text: "00/00/0000 al 00/00/0000\n",
                style: "simpleLabel",
              },
            ],
          },

          {
            text: [
              {
                text: "Chofer: ",
                style: "simpleBoldLabel",
              },
              {
                text: "Lorem ipsum dolor sit amet.\n",
                style: "simpleLabel",
              },
            ],
          },
          {
            text: [
              {
                text: "Ayudante: ",
                style: "simpleBoldLabel",
              },
              {
                text: "Lorem ipsum dolor sit amet.\n",
                style: "simpleLabel",
              },
            ],
          },
        ],

        [
          { text: "TANQUE ESTACIONARIO\n", style: "bigLabel" },
          {
            text: [
              { text: "Vence el día: ", style: "simpleBoldLabel" },
              { text: "00/00/0000\n", style: "simpleLabel" },
            ],
          },
          {
            text: [
              {
                text: "N° ECO: ",
                style: "simpleBoldLabel",
              },
              {
                text: "000-000\n",
                style: "simpleLabel",
              },
            ],
          },
          {
            text: [
              {
                text: "Zona: ",
                style: "simpleBoldLabel",
              },
              {
                text: "0000\n",
                style: "simpleLabel",
              },
            ],
          },

          {
            text: "\n",
          },
        ],
      ],
    },

    // SALES TABLE
    {
      text: "\nVenta:\n\n",
      style: "bigBoldLabel",
    },
    {
      table: {
        body: [
          [
            { text: "Ventas", style: "headerCell", colSpan: 6 },
            {},
            {},
            {},
            {},
            {},
            { text: "Comisión", style: "headerCell", colSpan: 4 },
            {},
            {},
            {},
            { text: "Bono", style: "headerCell" },
          ],
          [
            {
              text: "Tipo",
              style: "subheaderCell",
            },
            {
              text: "Lts",
              style: "subheaderCell",
            },
            {
              text: "ANT",
              style: "subheaderCell",
            },
            {
              text: "ACT",
              style: "subheaderCell",
            },
            {
              text: "T. Lts",
              style: "subheaderCell",
            },
            {
              text: "Puntos",
              style: "subheaderCell",
            },
            {
              text: "Lts",
              style: "subheaderCell",
            },
            {
              text: "ANT",
              style: "subheaderCell",
            },
            {
              text: "P. Día (*)",
              style: "subheaderCell",
            },
            {
              text: "Total",
              style: "subheaderCell",
            },
            {
              text: "Lts",
              style: "subheaderCell",
            },
          ],
          [
            { text: "A", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
          ],
          [
            { text: "B", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
          ],
          [
            { text: "C", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
          ],
        ],
      },
    },

    // ACUMMULATED TABLE
    {
      text: "\nAcumulado:\n\n",
      style: "bigBoldLabel",
    },
    {
      table: {
        body: [
          [
            { text: "Ventas", style: "headerCell", colSpan: 6 },
            {},
            {},
            {},
            {},
            {},
            { text: "Comisión", style: "headerCell", colSpan: 4 },
            {},
            {},
            {},
            { text: "Bono", style: "headerCell" },
          ],
          [
            {
              text: "Tipo",
              style: "subheaderCell",
            },
            {
              text: "Lts",
              style: "subheaderCell",
            },
            {
              text: "ANT",
              style: "subheaderCell",
            },
            {
              text: "ACT",
              style: "subheaderCell",
            },
            {
              text: "T. Lts",
              style: "subheaderCell",
            },
            {
              text: "Puntos",
              style: "subheaderCell",
            },
            {
              text: "Lts",
              style: "subheaderCell",
            },
            {
              text: "ANT",
              style: "subheaderCell",
            },
            {
              text: "P. Día (*)",
              style: "subheaderCell",
            },
            {
              text: "Total",
              style: "subheaderCell",
            },
            {
              text: "Lts",
              style: "subheaderCell",
            },
          ],
          [
            { text: "A", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
          ],
          [
            { text: "B", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
          ],
          [
            { text: "C", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
            { text: "0000", style: "commonCell" },
          ],
        ],
      },
    },

    // RATES TABLE
    {
      text: "\n",
      style: "bigLabel",
    },

    {
      columns: [
        [
          {
            text: "\nTarifas para comisiones:\n",
            style: "bigBoldLabel",
          },
          {
            text: "\nTarifa por litro:\n\n",
            style: "bigLabel",
          },
          {
            table: {
              body: [
                [
                  { text: "Tipo", style: "headerCell" },
                  { text: "Comisión", style: "headerCell" },
                  { text: "P/Bono", style: "headerCell" },
                ],
                [
                  { text: "A", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
                [
                  { text: "B", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
                [
                  { text: "C", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
                [
                  { text: "D", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
                [
                  { text: "E", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
                [
                  { text: "F", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
              ],
            },
          },
        ],
        [
          {
            text: "\n\n",
            style: "bigBoldLabel",
          },
          {
            text: "\nBono:\n\n",
            style: "bigLabel",
          },
          {
            table: {
              style: "simpleTable",
              body: [
                [
                  { text: "Tipo", style: "headerCell" },
                  { text: "Comisión", style: "headerCell" },
                ],
                [
                  { text: "000", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
                [
                  { text: "000", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
                [
                  { text: "000", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
                [
                  { text: "000", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
                [
                  { text: "000", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
                [
                  { text: "000", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
              ],
            },
          },
          {
            text: "\nRemanente:\n\n",
            style: "bigLabel",
          },
          {
            table: {
              body: [
                [
                  { text: "Tipo", style: "headerCell" },
                  { text: "Comisión", style: "headerCell" },
                ],
                [
                  { text: "000", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
                [
                  { text: "000", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
                [
                  { text: "000", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
                [
                  { text: "000", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
                [
                  { text: "000", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
                [
                  { text: "000", style: "commonCell" },
                  { text: "$000.00", style: "commonCell" },
                ],
              ],
            },
          },
        ],
        [
          {
            text: "\nCréditos/Días Laborados:\n\n\n\n",
            style: "bigBoldLabel",
          },
          {
            table: {
              body: [
                [
                  { text: "", style: "headerCell" },
                  { text: "Hoy", style: "headerCell" },
                  { text: "ACUM", style: "headerCell" },
                ],
                [
                  { text: "Créditos", style: "commonCell" },
                  { text: "00", style: "commonCell" },
                  { text: "00", style: "commonCell" },
                ],
                [
                  { text: "Faltantes", style: "commonCell" },
                  { text: "00", style: "commonCell" },
                  { text: "00", style: "commonCell" },
                ],
                [
                  { text: "Abono CTA", style: "commonCell" },
                  { text: "00", style: "commonCell" },
                  { text: "00", style: "commonCell" },
                ],
                [
                  { text: "A descontar", style: "commonCell" },
                  { text: "00", style: "commonCell" },
                  { text: "00", style: "commonCell" },
                ],
              ],
            },
          },
          {
            text: "\n",
            style: "bigBoldLabel",
          },
          {
            table: {
              body: [
                [
                  { text: "", style: "headerCell" },
                  { text: "Días", style: "headerCell" },
                ],
                [
                  { text: "Trascurridos", style: "commonCell" },
                  { text: "00", style: "commonCell" },
                ],
                [
                  { text: "Trabajados", style: "commonCell" },
                  { text: "00", style: "commonCell" },
                ],
                [
                  { text: "Por trascurrir", style: "commonCell" },
                  { text: "00", style: "commonCell" },
                ],
              ],
            },
          },
        ],
      ],
    },

    // SIGNATURE
    {
      text: "\n\n\n\n\n",
      style: "bigBoldLabel",
    },
    {
      columns: [
        [
          {
            text: "________________________________________________\n\n",
            style: "bigLabel",
          },
          { text: "Firma: Lorem ipsum dolor sit amet.", style: "bigLabel" },
        ],
        [
          {
            text: "________________________________________________\n\n",
            style: "bigLabel",
          },
          { text: "Firma: Lorem ipsum dolor sit amet.", style: "bigLabel" },
        ],
      ],
    },

    // SYMBOLS
    {
      text: "\n",
      style: "bigBoldLabel",
    },
    {
      text: "Puntos:\n",
      style: "bigBoldLabel",
    },
    {
      text: "ACT: Comisión pagada al momento que se otorgaron.",
      style: "bigLabel",
    },
    {
      text: "ANT: Comisión pendiente de pago.",
      style: "bigLabel",
    },
    {
      text: "(*): Pago de comisión triple.",
      style: "bigLabel",
    },
  ],
};
