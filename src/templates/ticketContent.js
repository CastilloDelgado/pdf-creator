// This is the example of the ticker we will print

module.exports = {
  content: [
    {
      table: {
        widths: [70, 70, 70],
        border: [false, false, false, false],
        body: [
          /*
           *
           *  HEADER INFO
           *
           */

          [
            {
              text: [
                { text: "GASPAZA MAZATLAN, SIN.\n", style: "bigBoldLabel" },
                {
                  text: "Periodo de Nómina: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: "00/00/0000 al 00/00/0000\n",
                  style: "simpleLabel",
                },
                {
                  text: "Chofer: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: "Lorem ipsum dolor sit amet.\n",
                  style: "simpleLabel",
                },
                {
                  text: "Ayudante: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: "Lorem ipsum dolor sit amet.\n",
                  style: "simpleLabel",
                },
              ],
              border: [false, false, false, false],
              colSpan: 2,
            },
            {},
            {
              text: [
                { text: "PORTATIL\n", style: "bidLabel" },
                {
                  text: "Vence el día: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: "00/00/0000\n",
                  style: "simpleLabel",
                },
                {
                  text: "N° de ECO",
                  style: "simpleBoldLabel",
                },
                {
                  text: "000-000\n",
                  style: "simpleLabel",
                },
                {
                  text: "Zona: ",
                  style: "simpleBoldLabel",
                },
                {
                  text: "0000\n",
                  style: "simpleLabel",
                },
                {
                  text: "\n",
                },
              ],
              border: [false, false, false, false],
            },
          ],

          /*
           *
           *  VENTA
           *
           */

          /*
           *
           *  Header
           *
           */

          [
            {
              text: [{ text: "Venta\n", style: "simpleBoldLabel" }],
              border: [false, false, false, false],
              colSpan: 3,
            },
            {},
            {},
          ],
          [
            {
              text: [{ text: "Venta:\n", style: "simpleLabel" }],
              border: [false, false, false, false],
            },
            {
              text: [{ text: "Ventas y comisiones:\n", style: "simpleLabel" }],
              border: [false, false, false, false],
              colSpan: 2,
            },
            {},
          ],

          /*
           *
           *  Table
           *
           */
          [
            {
              colSpan: 1,
              border: [false, false, false, false],
              style: "simpleTable",
              table: {
                body: [
                  [
                    {
                      text: "Concepto",
                      style: "headerCell",
                    },
                    {
                      text: "Total",
                      style: "headerCell",
                    },
                  ],
                  ["EFEC/Ventas", "00"],
                  ["Cheques", "00"],
                  ["Total liquidaciones", "00"],
                ],
              },
            },
            {
              colSpan: 2,
              border: [false, false, false, false],
              style: "simpleTable",
              table: {
                body: [
                  [
                    {
                      text: "Cils",
                      style: "headerCell",
                    },
                    {
                      text: "KCils",
                      style: "headerCell",
                    },
                    {
                      text: "30K",
                      style: "headerCell",
                    },
                    {
                      text: "45K",
                      style: "headerCell",
                    },
                    {
                      text: "C/Bono",
                      style: "headerCell",
                    },
                    {
                      text: "Comisión",
                      style: "headerCell",
                    },
                  ],
                  ["Hoy", 0, 0, 0, 0, 0],
                  ["Ac", 0, 0, 0, 0, 0],
                ],
              },
            },
          ],

          [
            {
              text: [
                { text: "Acumulado para bono\n", style: "simpleBoldLabel" },
              ],
              border: [false, false, false, false],
              colSpan: 3,
            },
            {},
            {},
          ],
          /*
           *
           *  Table
           *
           */
          [
            {
              colSpan: 3,
              border: [false, false, false, false],
              style: "simpleTable",
              table: {
                widths: [100, 100],
                body: [
                  [
                    {
                      text: "Concepto",
                      style: "headerCell",
                    },
                    {
                      text: "Total",
                      style: "headerCell",
                    },
                  ],
                  ["Sobre venta anterio", "00"],
                  ["Venta acum quincena", "00"],
                  ["Total", "00"],
                ],
              },
            },
          ],

          [
            {
              text: [{ text: "Créditos\n", style: "simpleBoldLabel" }],
              border: [false, false, false, false],
              colSpan: 3,
            },
            {},
            {},
          ],
          /*
           *
           *  Table
           *
           */
          [
            {
              colSpan: 3,
              border: [false, false, false, false],
              style: "simpleTable",
              table: {
                widths: [46, 46, 46, 46],
                body: [
                  [
                    {
                      text: "",
                      style: "headerCell",
                    },
                    {
                      text: "Faltantes",
                      style: "headerCell",
                    },
                    {
                      text: "Créditos",
                      style: "headerCell",
                    },
                    {
                      text: "Abono",
                      style: "headerCell",
                    },
                  ],
                  ["Hoy", "$0000.00", "$0000.00", "$0000.00"],
                  ["Acum", "$0000.00", "$0000.00", "$0000.00"],
                ],
              },
            },
          ],

          [
            {
              text: [
                { text: "Información General\n", style: "simpleBoldLabel" },
              ],
              border: [false, false, false, false],
              colSpan: 3,
            },
            {},
            {},
          ],
          /*
           *
           *  Table
           *
           */
          [
            {
              colSpan: 3,
              border: [false, false, false, false],
              style: "simpleTable",
              table: {
                widths: [100, 100],
                body: [
                  [
                    {
                      text: "Concepto",
                      style: "headerCell",
                    },
                    {
                      text: "Cantidad",
                      style: "headerCell",
                    },
                  ],
                  ["Días transcurridos", "00"],
                  ["Días trabajados", "00"],
                  ["Días por transcurrir", "00"],
                ],
              },
            },
          ],

          [
            {
              text: [{ text: "Tabulador\n", style: "simpleBoldLabel" }],
              border: [false, false, false, false],
              colSpan: 3,
            },
            {},
            {},
          ],
          /*
           *
           *  Table
           *
           */
          [
            {
              colSpan: 3,
              border: [false, false, false, false],
              style: "simpleTable",
              table: {
                widths: [64, 64, 64],
                body: [
                  [
                    {
                      text: "L. Inferior",
                      style: "headerCell",
                    },
                    {
                      text: "L. Superior",
                      style: "headerCell",
                    },
                    {
                      text: "Comisión",
                      style: "headerCell",
                    },
                  ],
                  ["0000", "0000", "$0000.00"],
                  ["0000", "0000", "$0000.00"],
                  ["0000", "0000", "$0000.00"],
                  ["0000", "0000", "$0000.00"],
                ],
              },
            },
          ],
        ],
      },
    },
  ],
};
