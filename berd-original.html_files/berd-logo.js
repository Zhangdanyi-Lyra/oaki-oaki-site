
      const EASE = ".16 1 .3 1";
      const LOOP = "indefinite";
      const REDUCE_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)");
      const ACTIVE_VERSION = "v9";
      const EMPTY_CUTOUT_PATH =
        "M 233 155 L 233 155 Q 233 155 233 155 L 233 155 Q 233 155 233 155 L 233 155 Q 233 155 233 155 L 233 155 Q 233 155 233 155 Z";
      const ROUNDED_CUTOUT_PATH =
        "M 193 111 L 273 111 Q 277 111 277 115 L 277 195 Q 277 199 273 199 L 193 199 Q 189 199 189 195 L 189 115 Q 189 111 193 111 Z";
      const ROUNDED_CUTOUT_LARGE_PATH =
        "M 185 103 L 281 103 Q 285 103 285 107 L 285 203 Q 285 207 281 207 L 185 207 Q 181 207 181 203 L 181 107 Q 181 103 185 103 Z";
      const ROUNDED_CUTOUT_BOUNCE_PATH =
        "M 190 108 L 276 108 Q 280 108 280 112 L 280 198 Q 280 202 276 202 L 190 202 Q 186 202 186 198 L 186 112 Q 186 108 190 108 Z";
      const ROUNDED_DIAMOND_PATH =
        "M 236 99 L 293 154 Q 296 157 293 160 L 236 215 Q 233 218 230 215 L 173 160 Q 170 157 173 154 L 230 99 Q 233 96 236 99 Z";
      const VERSIONS = {
        v1: {
          duration: "1.18s",
          body: {
            opacity: ["0;0.03;0.08;0.98;1", "0;0;1;1;0"],
            x: ["0;0.08;0.16;0.23;0.35;0.47;0.6;0.98;1", "233;202;186;186;116;133;128;128;233"],
            y: ["0;0.08;0.16;0.23;0.35;0.47;0.6;0.98;1", "155;124;109;109;38;57;50;50;155"],
            width: ["0;0.08;0.16;0.23;0.35;0.47;0.6;0.98;1", "0;62;93;93;234;200;210;210;0"],
            height: ["0;0.08;0.16;0.23;0.35;0.47;0.6;0.98;1", "0;62;93;93;234;200;210;210;0"],
            rx: ["0;0.08;0.16;0.23;0.35;0.47;0.6;1", "0;5;7;7;38;31;34;34"],
          },
          cutout: {
            opacity: ["0;0.26;0.27;0.98;1", "0;0;1;1;0"],
            d: [
              "0;0.26;0.35;0.48;0.58;1",
              "M 233 155 L 233 155 L 233 155 L 233 155 Z;M 233 155 L 233 155 L 233 155 L 233 155 Z;M 189 111 L 277 111 L 277 199 L 189 199 Z;M 181 103 L 285 103 L 285 207 L 181 207 Z;M 233 96 L 296 157 L 233 218 L 170 157 Z;M 233 96 L 296 157 L 233 218 L 170 157 Z",
            ],
          },
          leftEye: {
            opacity: ["0;0.56;0.57;0.98;1", "0;0;1;1;0"],
            rx: ["0;0.56;0.63;0.98;1", "0;0;18.5;18.5;0"],
            ry: ["0;0.56;0.63;0.72;0.77;0.82;0.88;0.93;0.98;1", "0;0;18.5;18.5;2.2;18.5;18.5;2.2;18.5;0"],
          },
          rightEye: {
            opacity: ["0;0.56;0.57;0.98;1", "0;0;1;1;0"],
            rx: ["0;0.56;0.63;0.98;1", "0;0;18.5;18.5;0"],
            ry: ["0;0.56;0.63;0.72;0.77;0.82;0.88;0.93;0.98;1", "0;0;18.5;18.5;2.2;18.5;18.5;2.2;18.5;0"],
          },
        },
        v2: {
          duration: "1.72s",
          body: {
            opacity: ["0;0.025;0.06;1", "0;0;1;1"],
            x: ["0;0.065;0.14;0.22;0.31;0.4;0.5;0.58;1", "233;204;187;184;116;130;126;128;128"],
            y: ["0;0.065;0.14;0.22;0.31;0.4;0.5;0.58;1", "155;126;109;106;39;54;48;50;50"],
            width: ["0;0.065;0.14;0.22;0.31;0.4;0.5;0.58;1", "0;58;92;98;234;206;214;210;210"],
            height: ["0;0.065;0.14;0.22;0.31;0.4;0.5;0.58;1", "0;58;92;98;234;206;214;210;210"],
            rx: ["0;0.065;0.14;0.22;0.31;0.4;0.5;0.58;1", "0;5;7;8;39;32;35;34;34"],
          },
          cutout: {
            opacity: ["0;0.23;0.255;1", "0;0;1;1"],
            d: [
              "0;0.24;0.34;0.46;0.58;1",
              "M 233 155 L 233 155 L 233 155 L 233 155 Z;M 233 155 L 233 155 L 233 155 L 233 155 Z;M 189 111 L 277 111 L 277 199 L 189 199 Z;M 181 103 L 285 103 L 285 207 L 181 207 Z;M 233 96 L 296 157 L 233 218 L 170 157 Z;M 233 96 L 296 157 L 233 218 L 170 157 Z",
            ],
          },
          leftEye: {
            opacity: ["0;0.53;0.555;1", "0;0;1;1"],
            rx: ["0;0.53;0.6;1", "0;0;18.5;18.5"],
            ry: ["0;0.53;0.6;0.7;0.725;0.755;0.79;0.815;0.845;1", "0;0;18.5;18.5;2.2;18.5;18.5;2.2;18.5;18.5"],
          },
          rightEye: {
            opacity: ["0;0.53;0.555;1", "0;0;1;1"],
            rx: ["0;0.53;0.6;1", "0;0;18.5;18.5"],
            ry: ["0;0.53;0.6;0.7;0.725;0.755;0.79;0.815;0.845;1", "0;0;18.5;18.5;2.2;18.5;18.5;2.2;18.5;18.5"],
          },
        },
        v3: {
          duration: "1.72s",
          body: {
            opacity: ["0;0.025;0.06;1", "0;0;1;1"],
            x: ["0;0.065;0.14;0.22;0.31;0.4;0.5;0.58;1", "233;204;187;184;116;130;126;128;128"],
            y: ["0;0.065;0.14;0.22;0.31;0.4;0.5;0.58;1", "155;126;109;106;39;54;48;50;50"],
            width: ["0;0.065;0.14;0.22;0.31;0.4;0.5;0.58;1", "0;58;92;98;234;206;214;210;210"],
            height: ["0;0.065;0.14;0.22;0.31;0.4;0.5;0.58;1", "0;58;92;98;234;206;214;210;210"],
            rx: ["0;0.065;0.14;0.22;0.31;0.4;0.5;0.58;1", "0;5;7;8;39;32;35;34;34"],
          },
          cutout: {
            opacity: ["0;0.22;0.245;1", "0;0;1;1"],
            d: [
              "0;0.18;0.23;0.44;1",
              "M 233 155 L 233 155 L 233 155 L 233 155 Z;M 233 155 L 233 155 L 233 155 L 233 155 Z;M 189 111 L 277 111 L 277 199 L 189 199 Z;M 189 111 L 277 111 L 277 199 L 189 199 Z;M 189 111 L 277 111 L 277 199 L 189 199 Z",
            ],
          },
          cutoutRotation: [
            "0;0.18;0.31;1",
            "0 233 155;0 233 155;45 233 155;45 233 155",
          ],
          leftEye: {
            opacity: ["0;0.53;0.555;1", "0;0;1;1"],
            rx: ["0;0.53;0.6;1", "0;0;18.5;18.5"],
            ry: ["0;0.53;0.6;0.725;0.745;0.77;0.79;0.81;0.835;1", "0;0;18.5;18.5;2.2;18.5;18.5;2.2;18.5;18.5"],
          },
          rightEye: {
            opacity: ["0;0.53;0.555;1", "0;0;1;1"],
            rx: ["0;0.53;0.6;1", "0;0;18.5;18.5"],
            ry: ["0;0.53;0.6;0.725;0.745;0.77;0.79;0.81;0.835;1", "0;0;18.5;18.5;2.2;18.5;18.5;2.2;18.5;18.5"],
          },
        },
        v4: {
          duration: "2.8s",
          body: {
            opacity: ["0;0.025;0.06;0.98;1", "0;0;1;1;0"],
            x: [
              "0;0.045;0.1;0.16;0.23;0.3;0.36;0.42;0.68;0.76;0.82;0.88;0.94;0.98;1",
              "233;204;187;184;116;130;126;128;128;126;130;116;184;204;233",
            ],
            y: [
              "0;0.045;0.1;0.16;0.23;0.3;0.36;0.42;0.68;0.76;0.82;0.88;0.94;0.98;1",
              "155;126;109;106;39;54;48;50;50;48;54;39;106;126;155",
            ],
            width: [
              "0;0.045;0.1;0.16;0.23;0.3;0.36;0.42;0.68;0.76;0.82;0.88;0.94;0.98;1",
              "0;58;92;98;234;206;214;210;210;214;206;234;98;58;0",
            ],
            height: [
              "0;0.045;0.1;0.16;0.23;0.3;0.36;0.42;0.68;0.76;0.82;0.88;0.94;0.98;1",
              "0;58;92;98;234;206;214;210;210;214;206;234;98;58;0",
            ],
            rx: [
              "0;0.045;0.1;0.16;0.23;0.3;0.36;0.42;0.68;0.76;0.82;0.88;0.94;0.98;1",
              "0;5;7;8;39;32;35;34;34;35;32;39;8;5;0",
            ],
          },
          cutout: {
            opacity: ["0;0.16;0.18;0.94;0.98;1", "0;0;1;1;0;0"],
            d: [
              "0;0.15;0.19;0.68;0.84;0.94;1",
              "M 233 155 L 233 155 L 233 155 L 233 155 Z;M 233 155 L 233 155 L 233 155 L 233 155 Z;M 189 111 L 277 111 L 277 199 L 189 199 Z;M 189 111 L 277 111 L 277 199 L 189 199 Z;M 189 111 L 277 111 L 277 199 L 189 199 Z;M 233 155 L 233 155 L 233 155 L 233 155 Z;M 233 155 L 233 155 L 233 155 L 233 155 Z",
            ],
          },
          cutoutRotation: [
            "0;0.16;0.24;0.68;0.78;0.88;1",
            "0 233 155;0 233 155;45 233 155;45 233 155;45 233 155;0 233 155;0 233 155",
          ],
          leftEye: {
            opacity: ["0;0.24;0.265;0.84;0.92;1", "0;0;1;1;0;0"],
            rx: ["0;0.24;0.29;0.82;0.92;1", "0;0;18.5;18.5;0;0"],
            ry: [
              "0;0.24;0.29;0.56;0.58;0.605;0.63;0.65;0.675;0.82;0.92;1",
              "0;0;18.5;18.5;2.2;18.5;18.5;2.2;18.5;18.5;0;0",
            ],
          },
          rightEye: {
            opacity: ["0;0.24;0.265;0.84;0.92;1", "0;0;1;1;0;0"],
            rx: ["0;0.24;0.29;0.82;0.92;1", "0;0;18.5;18.5;0;0"],
            ry: [
              "0;0.24;0.29;0.56;0.58;0.605;0.63;0.65;0.675;0.82;0.92;1",
              "0;0;18.5;18.5;2.2;18.5;18.5;2.2;18.5;18.5;0;0",
            ],
          },
        },
        v5: {
          duration: "3s",
          body: {
            opacity: ["0;0.02;0.05;0.98;1", "0;0;1;1;0"],
            x: [
              "0;0.035;0.08;0.13;0.2;0.27;0.34;0.4;0.46;0.68;0.74;0.79;0.84;0.89;0.94;0.98;1",
              "233;201;185;189;110;137;121;131;128;128;131;121;137;110;189;201;233",
            ],
            y: [
              "0;0.035;0.08;0.13;0.2;0.27;0.34;0.4;0.46;0.68;0.74;0.79;0.84;0.89;0.94;0.98;1",
              "155;123;107;111;32;59;43;53;50;50;53;43;59;32;111;123;155",
            ],
            width: [
              "0;0.035;0.08;0.13;0.2;0.27;0.34;0.4;0.46;0.68;0.74;0.79;0.84;0.89;0.94;0.98;1",
              "0;64;96;88;246;192;224;204;210;210;204;224;192;246;88;64;0",
            ],
            height: [
              "0;0.035;0.08;0.13;0.2;0.27;0.34;0.4;0.46;0.68;0.74;0.79;0.84;0.89;0.94;0.98;1",
              "0;64;96;88;246;192;224;204;210;210;204;224;192;246;88;64;0",
            ],
            rx: [
              "0;0.035;0.08;0.13;0.2;0.27;0.34;0.4;0.46;0.68;0.74;0.79;0.84;0.89;0.94;0.98;1",
              "0;5;8;7;41;29;37;32;34;34;32;37;29;41;7;5;0",
            ],
          },
          cutout: {
            opacity: ["0;0.15;0.18;0.93;0.98;1", "0;0;1;1;0;0"],
            d: [
              "0;0.13;0.18;0.29;0.35;0.42;0.68;0.84;0.94;1",
              "M 233 155 L 233 155 L 233 155 L 233 155 Z;M 233 155 L 233 155 L 233 155 L 233 155 Z;M 184 106 L 282 106 L 282 204 L 184 204 Z;M 184 106 L 282 106 L 282 204 L 184 204 Z;M 192 114 L 274 114 L 274 196 L 192 196 Z;M 189 111 L 277 111 L 277 199 L 189 199 Z;M 189 111 L 277 111 L 277 199 L 189 199 Z;M 189 111 L 277 111 L 277 199 L 189 199 Z;M 233 155 L 233 155 L 233 155 L 233 155 Z;M 233 155 L 233 155 L 233 155 L 233 155 Z",
            ],
          },
          cutoutRotation: [
            "0;0.13;0.21;0.68;0.78;0.88;1",
            "0 233 155;0 233 155;45 233 155;45 233 155;45 233 155;0 233 155;0 233 155",
          ],
          leftEye: {
            opacity: ["0;0.21;0.235;0.83;0.92;1", "0;0;1;1;0;0"],
            rx: ["0;0.21;0.255;0.31;0.37;0.82;0.92;1", "0;0;21.5;16.5;18.5;18.5;0;0"],
            ry: [
              "0;0.21;0.255;0.31;0.37;0.56;0.58;0.605;0.63;0.65;0.675;0.82;0.92;1",
              "0;0;21.5;16.5;18.5;18.5;2.2;18.5;18.5;2.2;18.5;18.5;0;0",
            ],
          },
          rightEye: {
            opacity: ["0;0.21;0.235;0.83;0.92;1", "0;0;1;1;0;0"],
            rx: ["0;0.21;0.255;0.31;0.37;0.82;0.92;1", "0;0;21.5;16.5;18.5;18.5;0;0"],
            ry: [
              "0;0.21;0.255;0.31;0.37;0.56;0.58;0.605;0.63;0.65;0.675;0.82;0.92;1",
              "0;0;21.5;16.5;18.5;18.5;2.2;18.5;18.5;2.2;18.5;18.5;0;0",
            ],
          },
        },
        v6: {
          duration: "3.5s",
          body: {
            opacity: ["0;0.025;0.06;0.94;0.95;1", "0;0;1;1;0;0"],
            x: [
              "0;0.04;0.14;0.24;0.2829;0.6443;0.6872;0.7872;0.8872;0.9271;1",
              "233;202;135;126;128;128;126;135;202;233;233",
            ],
            y: [
              "0;0.04;0.14;0.24;0.2829;0.6443;0.6872;0.7872;0.8872;0.9271;1",
              "155;124;57;48;50;50;48;57;124;155;155",
            ],
            width: [
              "0;0.04;0.14;0.24;0.2829;0.6443;0.6872;0.7872;0.8872;0.9271;1",
              "0;62;196;214;210;210;214;196;62;0;0",
            ],
            height: [
              "0;0.04;0.14;0.24;0.2829;0.6443;0.6872;0.7872;0.8872;0.9271;1",
              "0;62;196;214;210;210;214;196;62;0;0",
            ],
            rx: [
              "0;0.04;0.14;0.24;0.2829;0.6443;0.6872;0.7872;0.8872;0.9271;1",
              "0;5;31;35;34;34;35;31;5;0;0",
            ],
          },
          cutout: {
            opacity: ["0;0.1286;0.1543;0.7643;0.7986;1", "0;0;1;1;0;0"],
            d: [
              "0;0.1286;0.1629;0.7643;0.7986;1",
              "M 233 155 L 233 155 Q 233 155 233 155 L 233 155 Q 233 155 233 155 L 233 155 Q 233 155 233 155 L 233 155 Q 233 155 233 155 Z;M 233 155 L 233 155 Q 233 155 233 155 L 233 155 Q 233 155 233 155 L 233 155 Q 233 155 233 155 L 233 155 Q 233 155 233 155 Z;M 193 111 L 273 111 Q 277 111 277 115 L 277 195 Q 277 199 273 199 L 193 199 Q 189 199 189 195 L 189 115 Q 189 111 193 111 Z;M 193 111 L 273 111 Q 277 111 277 115 L 277 195 Q 277 199 273 199 L 193 199 Q 189 199 189 195 L 189 115 Q 189 111 193 111 Z;M 233 155 L 233 155 Q 233 155 233 155 L 233 155 Q 233 155 233 155 L 233 155 Q 233 155 233 155 L 233 155 Q 233 155 233 155 Z;M 233 155 L 233 155 Q 233 155 233 155 L 233 155 Q 233 155 233 155 L 233 155 Q 233 155 233 155 L 233 155 Q 233 155 233 155 Z",
            ],
          },
          cutoutRotation: [
            "0;0.1371;0.2057;0.7214;0.79;1",
            "0 233 155;0 233 155;45 233 155;45 233 155;0 233 155;0 233 155",
          ],
          leftEye: {
            opacity: ["0;0.2143;0.2657;0.6614;0.7129;1", "0;0;1;1;0;0"],
            rx: ["0;0.2143;0.2657;0.6614;0.7129;1", "0;0;18.5;18.5;0;0"],
            ry: [
              "0;0.2143;0.2657;0.3857;0.4114;0.45;0.4714;0.5014;0.6614;0.7129;1",
              "0;0;18.5;18.5;2.2;18.5;18.5;2.2;18.5;0;0",
            ],
          },
          rightEye: {
            opacity: ["0;0.2143;0.2657;0.6614;0.7129;1", "0;0;1;1;0;0"],
            rx: ["0;0.2143;0.2657;0.6614;0.7129;1", "0;0;18.5;18.5;0;0"],
            ry: [
              "0;0.2143;0.2657;0.3857;0.4114;0.45;0.4714;0.5014;0.6614;0.7129;1",
              "0;0;18.5;18.5;2.2;18.5;18.5;2.2;18.5;0;0",
            ],
          },
        },
        v7: {
          duration: "3.05s",
          ease: ".12 1 .18 1",
          rotationEase: ".12 1 .18 1",
          body: {
            opacity: ["0;0.025;0.06;0.93;0.94;1", "0;0;1;1;0;0"],
            x: [
              "0;0.19;0.2492;0.79;0.84;0.9311;1",
              "233;125;128;128;125;233;233",
            ],
            y: [
              "0;0.19;0.2492;0.79;0.84;0.9311;1",
              "155;47;50;50;47;155;155",
            ],
            width: [
              "0;0.19;0.2492;0.79;0.84;0.9311;1",
              "0;216;210;210;216;0;0",
            ],
            height: [
              "0;0.19;0.2492;0.79;0.84;0.9311;1",
              "0;216;210;210;216;0;0",
            ],
            rx: [
              "0;0.19;0.2492;0.79;0.84;0.9311;1",
              "0;35;34;34;35;0;0",
            ],
          },
          cutout: {
            opacity: ["0;0.095;0.122;0.8;0.82;1", "0;0;1;1;0;0"],
            d: [
              "0;0.095;0.118;0.154;0.64;0.7;0.76;0.8;1",
              [
                EMPTY_CUTOUT_PATH,
                EMPTY_CUTOUT_PATH,
                ROUNDED_CUTOUT_BOUNCE_PATH,
                ROUNDED_CUTOUT_PATH,
                ROUNDED_CUTOUT_PATH,
                ROUNDED_CUTOUT_PATH,
                ROUNDED_CUTOUT_BOUNCE_PATH,
                EMPTY_CUTOUT_PATH,
                EMPTY_CUTOUT_PATH,
              ].join(";"),
            ],
          },
          cutoutRotation: [
            "0;0.112;0.165;0.64;0.8;1",
            "0 233 155;0 233 155;45 233 155;45 233 155;0 233 155;0 233 155",
          ],
          leftEye: {
            opacity: ["0;0.1574;0.223;0.6656;0.7213;1", "0;0;1;1;0;0"],
            rx: ["0;0.1574;0.223;0.6656;0.7213;1", "0;0;18.5;18.5;0;0"],
            ry: [
              "0;0.1574;0.223;0.3475;0.365;0.392;0.424;0.443;0.469;0.6656;0.7213;1",
              "0;0;18.5;18.5;2.2;18.5;18.5;2.2;18.5;18.5;0;0",
            ],
          },
          rightEye: {
            opacity: ["0;0.1574;0.223;0.6656;0.7213;1", "0;0;1;1;0;0"],
            rx: ["0;0.1574;0.223;0.6656;0.7213;1", "0;0;18.5;18.5;0;0"],
            ry: [
              "0;0.1574;0.223;0.3475;0.365;0.392;0.424;0.443;0.469;0.6656;0.7213;1",
              "0;0;18.5;18.5;2.2;18.5;18.5;2.2;18.5;18.5;0;0",
            ],
          },
        },
        v8: {
          duration: "3.35s",
          body: {
            opacity: ["0;0.0101;0.0243;0.92;0.94;1", "0;0;1;1;0;0"],
            x: [
              "0;0.034;0.073;0.114;0.161;0.196;0.22;0.492;0.516;0.54;0.575;0.622;0.663;0.702;0.736;0.9;1",
              "233;204;187;184;116;130;128;128;126;130;116;184;187;204;233;233;233",
            ],
            y: [
              "0;0.034;0.073;0.114;0.161;0.196;0.22;0.492;0.516;0.54;0.575;0.622;0.663;0.702;0.736;0.9;1",
              "155;126;109;106;39;54;50;50;48;54;39;106;109;126;155;155;155",
            ],
            width: [
              "0;0.034;0.073;0.114;0.161;0.196;0.22;0.492;0.516;0.54;0.575;0.622;0.663;0.702;0.736;0.9;1",
              "0;58;92;98;234;206;210;210;214;206;234;98;92;58;0;0;0",
            ],
            height: [
              "0;0.034;0.073;0.114;0.161;0.196;0.22;0.492;0.516;0.54;0.575;0.622;0.663;0.702;0.736;0.9;1",
              "0;58;92;98;234;206;210;210;214;206;234;98;92;58;0;0;0",
            ],
            rx: [
              "0;0.034;0.073;0.114;0.161;0.196;0.22;0.492;0.516;0.54;0.575;0.622;0.663;0.702;0.736;0.9;1",
              "0;5;7;8;39;32;34;34;35;32;39;8;7;5;0;0;0",
            ],
          },
          cutout: {
            opacity: ["0;0.0931;0.1032;0.9;0.92;1", "0;0;1;1;0;0"],
            d: [
              "0;0.08;0.12;0.17;0.22;0.492;0.54;0.59;0.63;0.9;1",
              [
                EMPTY_CUTOUT_PATH,
                EMPTY_CUTOUT_PATH,
                ROUNDED_CUTOUT_PATH,
                ROUNDED_CUTOUT_LARGE_PATH,
                ROUNDED_DIAMOND_PATH,
                ROUNDED_DIAMOND_PATH,
                ROUNDED_CUTOUT_LARGE_PATH,
                ROUNDED_CUTOUT_PATH,
                EMPTY_CUTOUT_PATH,
                EMPTY_CUTOUT_PATH,
                EMPTY_CUTOUT_PATH,
              ].join(";"),
            ],
          },
          leftEye: {
            opacity: ["0;0.2145;0.2428;0.492;0.535;0.9;1", "0;0;1;1;0;0;0"],
            rx: ["0;0.2145;0.2428;0.492;0.535;0.9;1", "0;0;18.5;18.5;0;0;0"],
            ry: [
              "0;0.2145;0.2428;0.275;0.298;0.326;0.34;0.363;0.391;0.492;0.535;0.9;1",
              "0;0;18.5;18.5;2.2;18.5;18.5;2.2;18.5;18.5;0;0;0",
            ],
          },
          rightEye: {
            opacity: ["0;0.2145;0.2428;0.492;0.535;0.9;1", "0;0;1;1;0;0;0"],
            rx: ["0;0.2145;0.2428;0.492;0.535;0.9;1", "0;0;18.5;18.5;0;0;0"],
            ry: [
              "0;0.2145;0.2428;0.275;0.298;0.326;0.34;0.363;0.391;0.492;0.535;0.9;1",
              "0;0;18.5;18.5;2.2;18.5;18.5;2.2;18.5;18.5;0;0;0",
            ],
          },
        },
      };

      function formatTime(value) {
        return String(Number(value.toFixed(4)));
      }

      function withEndpointHold(version, startHold, endHold) {
        const baseDuration = Number.parseFloat(version.duration);
        const duration = baseDuration + startHold + endHold;

        function shiftTiming([keyTimes, values]) {
          const shiftedTimes = keyTimes
            .split(";")
            .map((time) => formatTime((Number(time) * baseDuration + startHold) / duration));
          const splitValues = values.split(";");

          return [
            ["0", ...shiftedTimes, "1"].join(";"),
            [splitValues[0], ...splitValues, splitValues.at(-1)].join(";"),
          ];
        }

        return Object.fromEntries(
          Object.entries(version).map(([part, timings]) => {
            if (part === "duration") {
              return [part, `${formatTime(duration)}s`];
            }

            if (Array.isArray(timings)) {
              return [part, shiftTiming(timings)];
            }

            return [
              part,
              Object.fromEntries(
                Object.entries(timings).map(([attribute, timing]) => [attribute, shiftTiming(timing)]),
              ),
            ];
          }),
        );
      }

      function cropVersionDuration(version, duration) {
        const baseDuration = Number.parseFloat(version.duration);

        function cropTiming([keyTimes, values]) {
          const times = keyTimes.split(";").map(Number);
          const splitValues = values.split(";");
          const croppedTimes = [];
          const croppedValues = [];

          times.forEach((time, index) => {
            const absoluteTime = time * baseDuration;

            if (absoluteTime <= duration) {
              croppedTimes.push(formatTime(absoluteTime / duration));
              croppedValues.push(splitValues[index]);
            }
          });

          if (croppedTimes.at(-1) !== "1") {
            croppedTimes.push("1");
            croppedValues.push(croppedValues.at(-1));
          }

          return [croppedTimes.join(";"), croppedValues.join(";")];
        }

        return Object.fromEntries(
          Object.entries(version).map(([part, timings]) => {
            if (part === "duration") {
              return [part, `${formatTime(duration)}s`];
            }

            if (Array.isArray(timings)) {
              return [part, cropTiming(timings)];
            }

            return [
              part,
              Object.fromEntries(
                Object.entries(timings).map(([attribute, timing]) => [attribute, cropTiming(timing)]),
              ),
            ];
          }),
        );
      }

      VERSIONS.v8 = withEndpointHold(VERSIONS.v8, 0.08, 0.03);
      VERSIONS.v8 = cropVersionDuration(VERSIONS.v8, 2.75);
      VERSIONS.v9 = {
        ...VERSIONS.v8,
        viewport: {
          className: "berd-logo__mark--compact",
          height: 70,
          style: "inline-size: 70px; block-size: 70px;",
          viewBox: "116 38 234 234",
          width: 70,
        },
      };

      let activeVersion = ACTIVE_VERSION;

      function splines(keyTimes, easing = EASE) {
        return Array.from({ length: keyTimes.split(";").length - 1 }, () => easing).join(";");
      }

      function animate(attributeName, [keyTimes, values], duration, easing = EASE) {
        return `<animate attributeName="${attributeName}" begin="indefinite" dur="${duration}" calcMode="spline" fill="remove" keySplines="${splines(
          keyTimes,
          easing,
        )}" keyTimes="${keyTimes}" repeatCount="${LOOP}" values="${values}" />`;
      }

      function animations(config, duration, easing = EASE) {
        return Object.entries(config)
          .map(([attributeName, timing]) => animate(attributeName, timing, duration, easing))
          .join("");
      }

      function animateRotation([keyTimes, values], duration, easing) {
        if (easing) {
          return `<animateTransform attributeName="transform" type="rotate" begin="indefinite" dur="${duration}" calcMode="spline" fill="remove" keySplines="${splines(
            keyTimes,
            easing,
          )}" keyTimes="${keyTimes}" repeatCount="${LOOP}" values="${values}" />`;
        }

        return `<animateTransform attributeName="transform" type="rotate" begin="indefinite" dur="${duration}" calcMode="linear" fill="remove" keyTimes="${keyTimes}" repeatCount="${LOOP}" values="${values}" />`;
      }

      function viewportFor(config) {
        return config.viewport ?? {
          className: "",
          height: 309,
          viewBox: "0 0 466 309",
          width: 466,
        };
      }

      function svgAttrs(config) {
        const viewport = viewportFor(config);
        const classes = ["berd-logo__mark", viewport.className].filter(Boolean).join(" ");
        const style = viewport.style ? ` style="${viewport.style}"` : "";

        return `class="${classes}" viewBox="${viewport.viewBox}" width="${viewport.width}" height="${viewport.height}"${style}`;
      }

      let maskIdSequence = 0;

      function renderAnimatedSvg(config) {
        const maskId = `berdLogoCutouts-${++maskIdSequence}`;
        return `
          <svg ${svgAttrs(config)} aria-hidden="true">
            <defs>
              <mask id="${maskId}" x="0" y="0" width="466" height="309" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
                <rect x="0" y="0" width="466" height="309" fill="#fff" />
                <path d="M 233 155 L 233 155 L 233 155 L 233 155 Z" fill="#000" opacity="0">${animations(config.cutout, config.duration, config.ease)}${config.cutoutRotation ? animateRotation(config.cutoutRotation, config.duration, config.rotationEase) : ""}</path>
                <ellipse cx="166" cy="90" rx="0" ry="0" fill="#000" opacity="0">${animations(config.leftEye, config.duration, config.ease)}</ellipse>
                <ellipse cx="300" cy="90" rx="0" ry="0" fill="#000" opacity="0">${animations(config.rightEye, config.duration, config.ease)}</ellipse>
              </mask>
            </defs>
            <g mask="url(#${maskId})">
              <rect class="berd-logo__ink" x="233" y="155" width="0" height="0" rx="0">${animations(config.body, config.duration, config.ease)}</rect>
            </g>
          </svg>
        `;
      }

      function renderStaticSvg(config) {
        const maskId = `berdLogoStaticCutouts-${++maskIdSequence}`;
        return `
          <svg ${svgAttrs(config)} aria-hidden="true">
            <defs>
              <mask id="${maskId}" x="0" y="0" width="466" height="309" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
                <rect x="0" y="0" width="466" height="309" fill="#fff" />
                <path d="M 233 96 L 296 157 L 233 218 L 170 157 Z" fill="#000" />
                <ellipse cx="166" cy="90" rx="18.5" ry="18.5" fill="#000" />
                <ellipse cx="300" cy="90" rx="18.5" ry="18.5" fill="#000" />
              </mask>
            </defs>
            <g mask="url(#${maskId})">
              <rect class="berd-logo__ink" x="128" y="50" width="210" height="210" rx="34" />
            </g>
          </svg>
        `;
      }

      function restartSvgTimeline(mount) {
        const svg = mount.querySelector("svg");

        if (!svg || typeof svg.setCurrentTime !== "function") {
          return;
        }

        svg.pauseAnimations?.();
        svg.setCurrentTime?.(0);
        svg.querySelectorAll("animate, animateTransform").forEach((animation) => {
          animation.beginElement?.();
        });
        svg.unpauseAnimations?.();
      }

      function renderBerdLogo(mount, version = activeVersion) {
        if (!mount) return;
        activeVersion = version;
        const config = VERSIONS[activeVersion] ?? VERSIONS[ACTIVE_VERSION];
        mount.setAttribute("aria-label", `Berd logo loading animation ${activeVersion.toUpperCase()}`);

        if (REDUCE_MOTION.matches) {
          mount.innerHTML = renderStaticSvg(config);
            return;
        }

        mount.innerHTML = renderAnimatedSvg(config);
        restartSvgTimeline(mount);
      }


      window.renderBerdLogo = renderBerdLogo;
