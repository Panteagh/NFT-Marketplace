import React from "react";
import { useNftMarketPlaceContext } from "/src/components/Context/NFTMarketContext";
import HeaderPage from "/src/components/headerPages/HeaderPage";
import WalletOptionsButton from "/src/components/WalletOptionsButton/WalletOptionsButton";
import img from "/src/assets/images/Wallet.png";

function Wallet() {

  const { handelScrolling } = useNftMarketPlaceContext();
  handelScrolling();

  return (
    <div className="grid md:grid-cols-2 max-md:grid-cols-1 gap-6 mx-auto max-md:w-full">
      <div className="max-md:w-full ">
        <img className="w-full max-md:h-56 object-cover" src={img} />
      </div>

      <div className="max-md:mx-auto mx-5 ">
        <HeaderPage
          PageHeader="Connect wallet"
          description="Choose a wallet you want to connect. There are several wallet providers."
        />

        <div>
          <WalletOptionsButton
            style="max-lg:w-[320px] max-md:w-full max-md:h-12"
            icon={
              <svg
                className="md:w-8"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3435_9425)">
                  <path
                    d="M38.0082 1.5625L22.4004 13.1547L25.2867 6.31544L38.0082 1.5625Z"
                    fill="#E2761B"
                    stroke="#E2761B"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.97656 1.5625L17.4589 13.2645L14.7138 6.31544L1.97656 1.5625Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M32.3932 28.4336L28.2363 34.8022L37.1304 37.2493L39.6873 28.5748L32.3932 28.4336Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.330078 28.5748L2.87125 37.2493L11.7654 34.8022L7.60851 28.4336L0.330078 28.5748Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.2636 17.6732L8.78516 21.4223L17.6165 21.8144L17.3028 12.3242L11.2636 17.6732Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.722 17.6717L22.6043 12.2129L22.4004 21.8129L31.2161 21.4207L28.722 17.6717Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.7656 34.8014L17.0676 32.2132L12.4872 28.6367L11.7656 34.8014Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.918 32.2132L28.2356 34.8014L27.4984 28.6367L22.918 32.2132Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.2356 34.8011L22.918 32.2129L23.3415 35.6796L23.2944 37.1384L28.2356 34.8011Z"
                    fill="#D7C1B3"
                    stroke="#D7C1B3"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.7656 34.8011L16.7068 37.1384L16.6754 35.6796L17.0676 32.2129L11.7656 34.8011Z"
                    fill="#D7C1B3"
                    stroke="#D7C1B3"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.7849 26.3466L12.3613 25.0446L15.4829 23.6172L16.7849 26.3466Z"
                    fill="#233447"
                    stroke="#233447"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.1992 26.3466L24.5012 23.6172L27.6384 25.0446L23.1992 26.3466Z"
                    fill="#233447"
                    stroke="#233447"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.7643 34.8022L12.5172 28.4336L7.60742 28.5748L11.7643 34.8022Z"
                    fill="#CD6116"
                    stroke="#CD6116"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27.4824 28.4336L28.2354 34.8022L32.3922 28.5748L27.4824 28.4336Z"
                    fill="#CD6116"
                    stroke="#CD6116"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M31.2161 21.4219L22.4004 21.814L23.2161 26.3474L24.518 23.618L27.6553 25.0454L31.2161 21.4219Z"
                    fill="#CD6116"
                    stroke="#CD6116"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.3597 25.0454L15.4969 23.618L16.7832 26.3474L17.6146 21.814L8.7832 21.4219L12.3597 25.0454Z"
                    fill="#CD6116"
                    stroke="#CD6116"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.78516 21.4219L12.4871 28.6376L12.3616 25.0454L8.78516 21.4219Z"
                    fill="#E4751F"
                    stroke="#E4751F"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27.6549 25.0454L27.498 28.6376L31.2157 21.4219L27.6549 25.0454Z"
                    fill="#E4751F"
                    stroke="#E4751F"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.6165 21.8145L16.7852 26.3478L17.8204 31.6968L18.0557 24.6537L17.6165 21.8145Z"
                    fill="#E4751F"
                    stroke="#E4751F"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.4001 21.8145L21.9766 24.638L22.1648 31.6968L23.2158 26.3478L22.4001 21.8145Z"
                    fill="#E4751F"
                    stroke="#E4751F"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.215 26.3469L22.1641 31.6959L22.917 32.2135L27.4974 28.6371L27.6543 25.0449L23.215 26.3469Z"
                    fill="#F6851B"
                    stroke="#F6851B"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.3613 25.0449L12.4868 28.6371L17.0672 32.2135L17.8202 31.6959L16.7849 26.3469L12.3613 25.0449Z"
                    fill="#F6851B"
                    stroke="#F6851B"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.295 37.138L23.3421 35.6792L22.9499 35.3341H17.0362L16.6754 35.6792L16.7068 37.138L11.7656 34.8008L13.4911 36.2125L16.9892 38.6439H22.997L26.5107 36.2125L28.2362 34.8008L23.295 37.138Z"
                    fill="#C0AD9E"
                    stroke="#C0AD9E"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.917 32.213L22.164 31.6953H17.8189L17.066 32.213L16.6738 35.6796L17.0346 35.3345H22.9483L23.3405 35.6796L22.917 32.213Z"
                    fill="#161616"
                    stroke="#161616"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.667 13.9076L40.0003 7.5076L38.0082 1.5625L22.918 12.7625L28.7219 17.6723L36.9258 20.0723L38.7454 17.9547L37.9611 17.39L39.216 16.2449L38.2435 15.4919L39.4984 14.5351L38.667 13.9076Z"
                    fill="#763D16"
                    stroke="#763D16"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0 7.5076L1.33333 13.9076L0.486275 14.5351L1.74118 15.4919L0.784314 16.2449L2.03922 17.39L1.2549 17.9547L3.05882 20.0723L11.2627 17.6723L17.0667 12.7625L1.97647 1.5625L0 7.5076Z"
                    fill="#763D16"
                    stroke="#763D16"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M36.9255 20.0719L28.7216 17.6719L31.2157 21.4209L27.498 28.6366L32.3922 28.5738H39.6863L36.9255 20.0719Z"
                    fill="#F6851B"
                    stroke="#F6851B"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.2634 17.6719L3.05949 20.0719L0.330078 28.5738H7.60851L12.4869 28.6366L8.78498 21.4209L11.2634 17.6719Z"
                    fill="#F6851B"
                    stroke="#F6851B"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.3992 21.8144L22.9168 12.7635L25.3011 6.31641H14.7129L17.0658 12.7635L17.6149 21.8144L17.8031 24.6693L17.8188 31.6968H22.1639L22.1952 24.6693L22.3992 21.8144Z"
                    fill="#F6851B"
                    stroke="#F6851B"
                    stroke-width="0.3125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3435_9425">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            label="Metamask"
          />

          <WalletOptionsButton
            style="max-lg:w-[320px] max-md:w-full max-md:h-12"
            icon={
              <svg
                className="md:w-8"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3435_9465)">
                  <path
                    d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                    fill="url(#paint0_radial_3435_9465)"
                  />
                  <path
                    d="M12.5586 15.4473C16.582 11.5176 23.1133 11.5176 27.1367 15.4473L27.6211 15.9238C27.8242 16.1191 27.8242 16.4395 27.6211 16.6348L25.9648 18.252C25.8633 18.3535 25.6992 18.3535 25.5977 18.252L24.9336 17.6035C22.1211 14.8613 17.5742 14.8613 14.7617 17.6035L14.0508 18.2988C13.9492 18.4004 13.7852 18.4004 13.6836 18.2988L12.0273 16.6816C11.8242 16.4863 11.8242 16.166 12.0273 15.9707L12.5586 15.4473ZM30.5664 18.791L32.043 20.2285C32.2461 20.4238 32.2461 20.7441 32.043 20.9395L25.3945 27.4316C25.1914 27.627 24.8633 27.627 24.668 27.4316L19.9492 22.8223C19.9023 22.7754 19.8164 22.7754 19.7695 22.8223L15.0508 27.4316C14.8477 27.627 14.5195 27.627 14.3242 27.4316L7.65234 20.9395C7.44922 20.7441 7.44922 20.4238 7.65234 20.2285L9.12891 18.791C9.33203 18.5957 9.66016 18.5957 9.85547 18.791L14.5742 23.4004C14.6211 23.4473 14.707 23.4473 14.7539 23.4004L19.4727 18.791C19.6758 18.5957 20.0039 18.5957 20.1992 18.791L24.918 23.4004C24.9648 23.4473 25.0508 23.4473 25.0977 23.4004L29.8164 18.791C30.0352 18.5957 30.3633 18.5957 30.5664 18.791Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_3435_9465"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(0.000123978 20.0006) scale(40)"
                  >
                    <stop stop-color="#5D9DF6" />
                    <stop offset="1" stop-color="#006FFF" />
                  </radialGradient>
                  <clipPath id="clip0_3435_9465">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            label="Wallet Connect"
          />

          <WalletOptionsButton
            style="max-lg:w-[320px] max-md:w-full max-md:h-12"
            icon={
              <svg
                className="md:w-8"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3435_9470)">
                  <path
                    d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                    fill="#0052FF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.9375 20C5.9375 27.7665 12.2335 34.0625 20 34.0625C27.7665 34.0625 34.0625 27.7665 34.0625 20C34.0625 12.2335 27.7665 5.9375 20 5.9375C12.2335 5.9375 5.9375 12.2335 5.9375 20ZM16.4062 15.4688C15.8885 15.4688 15.4688 15.8885 15.4688 16.4062V23.5938C15.4688 24.1115 15.8885 24.5312 16.4062 24.5312H23.5938C24.1115 24.5312 24.5312 24.1115 24.5312 23.5938V16.4062C24.5312 15.8885 24.1115 15.4688 23.5938 15.4688H16.4062Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3435_9470">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            label="Coinbase"
          />
        </div>
      </div>
    </div>
  );
}

export default Wallet;
