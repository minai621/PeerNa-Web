import { createPortal } from 'react-dom';

const svgSpriteCode = (
  <svg xmlns="http://www.w3.org/2000/svg">
    <symbol id="search" viewBox="0 0 23 23">
      <path
        fill="#394046"
        d="M8.75 0a8.75 8.75 0 0 1 6.695 14.384l6.835 6.836a.75.75 0 0 1-.976 1.133l-.084-.073-6.836-6.835A8.75 8.75 0 1 1 8.75 0zm0 1.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5z"
      />
    </symbol>
    <symbol id="straight" viewBox="0 0 16 16">
      <path
        fill="#FF744D"
        d="M5 2.5c0 .51-.152.983-.414 1.379L6.62 5.914A2.496 2.496 0 0 1 8 5.5c.51 0 .983.152 1.379.414l2.035-2.035a2.5 2.5 0 1 1 .707.707L10.086 6.62c.262.396.414.87.414 1.379 0 .51-.152.983-.414 1.379l2.035 2.035a2.5 2.5 0 1 1-.707.707L9.38 10.086a2.49 2.49 0 0 1-1.379.414c-.51 0-.983-.152-1.379-.414L4.586 12.12a2.5 2.5 0 1 1-.707-.707L5.914 9.38A2.488 2.488 0 0 1 5.5 8c0-.51.152-.983.414-1.379L3.88 4.586A2.5 2.5 0 1 1 5 2.5z"
      />
    </symbol>
    <symbol id="challenging" viewBox="0 0 18 16">
      <path
        fill="#FFC729"
        d="M10.5 2.5a2 2 0 1 1 2.612 1.905L14.707 6H16.5a1.5 1.5 0 0 1 0 3h-3.223c-.63 0-1.234-.25-1.68-.696l-.097-.097-1.043 1.043 1.397 1.396A.5.5 0 0 1 12 11v3.5a1.5 1.5 0 0 1-3 0v-1.793L7.453 11.16l-1.002.752a2.942 2.942 0 0 1-1.765.588H1.5a1.5 1.5 0 0 1 0-3h4.25A2.25 2.25 0 0 0 8 7.25V6h1a.5.5 0 0 0 0-1H7.5a.5.5 0 0 0-.5.5v1.75a1.25 1.25 0 1 1-2.5 0V5A2.5 2.5 0 0 1 7 2.5h3.5z"
      />
    </symbol>
    <symbol id="conservative" viewBox="0 0 16 16">
      <path
        fill="#FFC729"
        d="M12.5 6c.546 0 1.059.146 1.5.401V5h-4v2.341A2.997 2.997 0 0 1 12.5 6zM8 11c0-.364.097-.706.268-1H5v4h3v-3zm1-2H5V5h4v4zM4 9V5H0v4h4zm-4 1h4v4H2.5A2.5 2.5 0 0 1 0 11.5V10zm10-6h4V2.5A2.5 2.5 0 0 0 11.5 0H10v4zM9 0v4H5V0h4zM4 0v4H0V2.5A2.5 2.5 0 0 1 2.5 0H4zm6.5 9v1H10a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5V9a2 2 0 1 0-4 0zm1 1V9a1 1 0 1 1 2 0v1h-2zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"
      />
    </symbol>
    <symbol id="open" viewBox="0 0 16 16">
      <path
        fill="#FFC729"
        d="M5 2.5c0 .51-.152.983-.414 1.379L6.62 5.914A2.496 2.496 0 0 1 8 5.5c.51 0 .983.152 1.379.414l2.035-2.035a2.5 2.5 0 1 1 .707.707L10.086 6.62c.262.396.414.87.414 1.379 0 .51-.152.983-.414 1.379l2.035 2.035a2.5 2.5 0 1 1-.707.707L9.38 10.086a2.49 2.49 0 0 1-1.379.414c-.51 0-.983-.152-1.379-.414L4.586 12.12a2.5 2.5 0 1 1-.707-.707L5.914 9.38A2.488 2.488 0 0 1 5.5 8c0-.51.152-.983.414-1.379L3.88 4.586A2.5 2.5 0 1 1 5 2.5z"
      />
    </symbol>
    <symbol id="conventional" viewBox="0 0 16 16">
      <path
        fill="#FFC729"
        d="M5 3a3 3 0 1 1 3.5 2.96V7.5h3A1.5 1.5 0 0 1 13 9v1.041a3.001 3.001 0 1 1-1 0V9a.5.5 0 0 0-.5-.5h-7A.5.5 0 0 0 4 9v1.041a3.001 3.001 0 1 1-1 0V9a1.5 1.5 0 0 1 1.5-1.5h3V5.96A3.001 3.001 0 0 1 5 3z"
      />
    </symbol>
    <symbol id="compromising" viewBox="0 0 16 16">
      <path
        fill="#FFC729"
        d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2.043a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5V1.5zM6 2h5.5A1.5 1.5 0 0 1 13 3.5V7h-1V3.5a.5.5 0 0 0-.5-.5H6V2zM3 6v5.5a.5.5 0 0 0 .5.5H7v1H3.5A1.5 1.5 0 0 1 2 11.5V6h1zm6.504 2a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5h-5z"
      />
    </symbol>
    <symbol id="careful" viewBox="0 0 16 16">
      <path
        fill="#FFC729"
        d="M15.603 5.519A7.999 7.999 0 1 1 10.486.393L9.438 1.44a1.5 1.5 0 0 0-.158.185 6.5 6.5 0 1 0 5.088 5.098 1.5 1.5 0 0 0 .192-.162l1.042-1.042zM12.898 7A5 5 0 1 1 9 3.1v1.546A3.5 3.5 0 1 0 11.353 7h1.545zm-4.9 2.5a1.5 1.5 0 0 0 1.45-1.887L11.03 6.03l.03-.03h2.44a.5.5 0 0 0 .354-.146l2-2A.5.5 0 0 0 15.5 3H13V.5a.5.5 0 0 0-.853-.354l-2 2A.5.5 0 0 0 10 2.5v2.44a.764.764 0 0 0-.03.03L8.388 6.55A1.502 1.502 0 0 0 6.498 8a1.5 1.5 0 0 0 1.5 1.5z"
      />
    </symbol>
    <symbol id="expedite" viewBox="0 0 15 12">
      <path
        fill="#FFC729"
        d="M7.018 1.486A1 1 0 0 1 8.61.68l5.88 4.311a1.25 1.25 0 0 1 0 2.016L8.61 11.32a1 1 0 0 1-1.592-.806v-3.16L1.61 11.319a1 1 0 0 1-1.592-.806V1.486A1 1 0 0 1 1.61.68l5.408 3.966v-3.16z"
      />
    </symbol>
    <symbol id="intuitive" viewBox="0 0 12 16">
      <path
        fill="#FFC729"
        d="M9.073 13l-.384 1.605c-.184.771-.865 1.33-1.67 1.39L6.874 16h-1.75c-.818 0-1.535-.516-1.776-1.261l-.038-.134L2.928 13h6.145zM6 0c3.314 0 6 2.597 6 5.8 0 1.677-.745 3.216-2.204 4.594a.6.6 0 0 0-.145.213l-.026.081L9.311 12h-2.81V7.497a.5.5 0 1 0-1 0V12H2.688l-.313-1.311a.595.595 0 0 0-.17-.295C.815 9.082.072 7.624.005 6.04L0 5.8l.003-.191C.108 2.494 2.753 0 6 0zm-.5 4.502v1.002a.5.5 0 0 0 1 0V4.502a.5.5 0 0 0-1 0zm3.35.941a.5.5 0 0 0-.707 0l-.708.709a.5.5 0 1 0 .707.707l.709-.709a.5.5 0 0 0 0-.707zm-4.998 0a.5.5 0 1 0-.707.707l.708.709a.5.5 0 1 0 .707-.707l-.708-.709z"
      />
    </symbol>
    <symbol id="statistic" viewBox="0 0 16 17">
      <path
        fill="#FFC729"
        d="M13 9c0-.364.097-.706.268-1H8.5A1.5 1.5 0 0 1 7 6.5V.017a7.5 7.5 0 0 0 0 14.967V13a2 2 0 0 1 3-1.732V11a2 2 0 0 1 3-1.732V9zM8 .017V6.5a.5.5 0 0 0 .5.5h6.484A7.501 7.501 0 0 0 8 .017zM14 9a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0V9zm-6 4a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0v-3zm3-2a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-5z"
      />
    </symbol>
    <symbol id="principle" viewBox="0 0 12 16">
      <path
        fill="#FFC729"
        d="M5.61 6.005h.981l-.2 1H5.41l.2-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.504a.5.5 0 1 0 0-1H2a1 1 0 0 1-1-.999h10.504a.5.5 0 0 0 .5-.5V2a2 2 0 0 0-2-2H2zm5.599 3.511a.5.5 0 0 1 .392.588l-.18.906h.94a.5.5 0 0 1 0 1h-1.14l-.2 1h1.09a.5.5 0 0 1 0 1H7.212l-.218 1.093a.5.5 0 1 1-.98-.196l.178-.897H5.21l-.22 1.093a.5.5 0 1 1-.98-.196l.18-.897h-.938a.5.5 0 0 1 0-1H4.39l.2-1H3.5a.5.5 0 0 1 0-1h1.29l.221-1.102a.5.5 0 0 1 .98.197l-.18.905h.98l.22-1.101a.5.5 0 0 1 .588-.393z"
      />
    </symbol>
    <symbol id="arrow-left" viewBox="0 0 11 20">
      <path
        fill="#394046"
        d="M10.727 1.687A1 1 0 1 0 9.273.313l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L2.875 10l7.852-8.313z"
      />
    </symbol>
    <symbol id="before-concern" viewBox="0 0 17 17">
      <path
        fill="#FF744D"
        d="M9.497 1.408A1.5 1.5 0 0 0 7.447.106L1.579 2.43A2.5 2.5 0 0 0 0 4.755v5.742a1.5 1.5 0 0 0 2 1.415V5.906a2.25 2.25 0 0 1 1.421-2.092l6.076-2.406zM12.499 3.5a1.5 1.5 0 0 0-2.052-1.394l-6.183 2.45A2 2 0 0 0 3 6.416v6.082a1.5 1.5 0 0 0 2.053 1.394L6 13.517v-5.98a2 2 0 0 1 1.264-1.86l5.235-2.073V3.5zm1.449.605A1.5 1.5 0 0 1 16 5.5v2.841a3 3 0 1 0-4.727 3.67A2.5 2.5 0 0 0 9 14.5c0 .443.089.889.274 1.307l-.222.088A1.5 1.5 0 0 1 7 14.5V7.877a1.5 1.5 0 0 1 .948-1.395l6-2.376zM15.5 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S10 15.75 10 14.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5z"
      />
    </symbol>
    <symbol id="after-concern" viewBox="0 0 17 17">
      <path
        fill="#FF744D"
        d="M17 4.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zm-4-2a.5.5 0 0 0-1 0V4h-1.5a.5.5 0 0 0 0 1H12v1.5a.5.5 0 0 0 1 0V5h1.5a.5.5 0 0 0 0-1H13V2.5zm-.5 7.5c1.33 0 2.55-.472 3.5-1.257v2.533c0 1.418-1.164 2.566-2.6 2.566H8.81l-4.011 2.961a1.009 1.009 0 0 1-1.4-.199.978.978 0 0 1-.199-.59v-2.172h-.6c-1.436 0-2.6-1.149-2.6-2.566v-6.71C0 3.149 1.164 2 2.6 2h5a5.5 5.5 0 0 0 4.9 8z"
      />
    </symbol>
    <symbol id="sincere" viewBox="0 0 16 16">
      <path
        fill="#FF744D"
        d="M8 0a8 8 0 1 1-3.613 15.14l-.121-.065-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083.91-3.644-.063-.12a7.95 7.95 0 0 1-.83-2.887l-.025-.382L0 8a8 8 0 0 1 8-8zm.5 9h-3l-.09.008a.5.5 0 0 0 0 .984L5.5 10h3l.09-.008a.5.5 0 0 0 0-.984L8.5 9zm2-3h-5l-.09.008a.5.5 0 0 0 0 .984L5.5 7h5l.09-.008a.5.5 0 0 0 0-.984L10.5 6z"
      />
    </symbol>
    <symbol id="subjective" viewBox="0 0 16 16">
      <path
        fill="#FF744D"
        d="M4.13.793A3.91 3.91 0 0 1 6.5 0c.24 0 .431.125.542.211.124.098.24.223.344.348A.5.5 0 0 1 7.5.877V4.5H6.415a1.5 1.5 0 1 0 0 1H7.5v9.415a.5.5 0 0 1-.183.387C6.855 15.68 6.237 16 5.5 16c-1.186 0-2.069-.598-2.64-1.313a4.057 4.057 0 0 1-.819-1.752 2.68 2.68 0 0 1-1.054-.555C.435 11.907 0 11.14 0 10c0-.557.037-1.06.12-1.5h3.13c.636 0 1.16.475 1.24 1.089a1.5 1.5 0 1 0 1.004-.006A2.25 2.25 0 0 0 3.25 7.5H.441c.153-.298.358-.55.625-.729a1.58 1.58 0 0 1 .212-.118c-.284-.832-.21-1.806.064-2.571.175-.492.453-.957.835-1.267.252-.205.552-.34.88-.366C3.2 1.766 3.606 1.2 4.13.793zM8.5 12.5h.75a2.25 2.25 0 0 0 2.25-2.25V8.415a1.5 1.5 0 1 0-1 0v1.835c0 .69-.56 1.25-1.25 1.25H8.5V.877a.5.5 0 0 1 .114-.318c.103-.125.22-.25.344-.348C9.068.125 9.26 0 9.5 0a3.91 3.91 0 0 1 2.37.793c.525.408.93.973 1.073 1.656.328.025.628.161.88.366.382.31.66.775.835 1.267.274.765.348 1.74.064 2.57.072.034.143.074.212.12.275.183.484.445.638.754.303.605.428 1.448.428 2.474 0 1.141-.435 1.907-.987 2.38a2.68 2.68 0 0 1-1.054.555c-.1.558-.38 1.204-.819 1.752-.57.715-1.454 1.313-2.64 1.313-.736 0-1.355-.32-1.817-.698a.5.5 0 0 1-.183-.387V12.5zM5 4.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm0 6a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm6-3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
      />
    </symbol>
    <symbol id="receptive" viewBox="0 0 17 16">
      <path
        fill="#FF744D"
        d="M8 1.5a6.5 6.5 0 0 0-4.601 11.091.75.75 0 1 1-1.062 1.06A8 8 0 1 1 15.97 7.296a3.004 3.004 0 0 0-1.756-1.21A6.503 6.503 0 0 0 8 1.5zm4.637 4.626A5.002 5.002 0 0 0 3 8c0 1.377.558 2.626 1.458 3.53a.75.75 0 0 0 1.063-1.06 3.5 3.5 0 1 1 5.811-3.544 3 3 0 0 1 1.305-.8zM6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9.5 1a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S10 14.75 10 13.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5z"
      />
    </symbol>
    <symbol id="objective" viewBox="0 0 16 17">
      <path
        fill="#FF744D"
        d="M0 6a6 6 0 1 1 2.996 5.195l-2.338.78a.5.5 0 0 1-.639-.612l.712-2.491A5.975 5.975 0 0 1 0 6zm4.5-1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm2 2h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"
      />
      <path
        fill="#FF744D"
        d="M10.276 13.947l-2.402-1.2c.44-.123.863-.287 1.263-.488l1.363.682 4.5-2.25V10a1 1 0 0 0-1-1h-1.674c.153-.32.281-.655.384-1H14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2.07c.327.046.66.07 1 .07v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.191l-4.276 2.138a.5.5 0 0 1-.448 0z"
      />
    </symbol>
    <symbol id="firm" viewBox="0 0 17 17">
      <path
        fill="#FF92FC"
        d="M4.5 0a2.5 2.5 0 0 0-2.456 2.03c.15-.02.302-.03.456-.03h8A3.5 3.5 0 0 1 14 5.5v1.707c.742.21 1.421.572 2 1.05V4a4 4 0 0 0-4-4H4.5zM13 5.5v1.522A5.5 5.5 0 0 0 7.207 14H7.16l-2.579 1.842A1 1 0 0 1 3 15.028V14h-.5A2.5 2.5 0 0 1 0 11.5v-6A2.5 2.5 0 0 1 2.5 3h8A2.5 2.5 0 0 1 13 5.5zm4 7a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zm-2.146-1.854a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 2.646-2.647a.5.5 0 0 1 .708 0z"
      />
    </symbol>
    <symbol id="indirect" viewBox="0 0 16 16">
      <path
        fill="#FF744D"
        d="M4.03.47a.75.75 0 0 1 0 1.06L2.81 2.75H9A6.25 6.25 0 1 1 2.75 9a.75.75 0 0 1 1.5 0A4.75 4.75 0 1 0 9 4.25H2.81l1.22 1.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0z"
      />
    </symbol>
    <symbol id="flexible" viewBox="0 0 17 18">
      <path
        fill="#FF92FC"
        d="M11.25 1.5A5.75 5.75 0 0 0 5.5 7.25v1a2.25 2.25 0 0 1-2.25 2.25H.75a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 0 4 8.25v-1A7.25 7.25 0 0 1 11.25 0h.5a.75.75 0 0 1 0 1.5h-.5zm-2.75 6a3.25 3.25 0 0 1 3.25-3.25h3.5a.75.75 0 0 0 0-1.5h-3.5A4.75 4.75 0 0 0 7 7.5v1a3.25 3.25 0 0 1-3.25 3.25h-3a.75.75 0 0 0 0 1.5h3A4.75 4.75 0 0 0 8.5 8.5v-1zm3.75-.5a.75.75 0 0 0-.75.75v1a7.26 7.26 0 0 1-.253 1.904 1.898 1.898 0 0 0-1.584.041A5.74 5.74 0 0 0 10 8.75v-1a2.25 2.25 0 0 1 2.25-2.25h3a.75.75 0 0 1 0 1.5h-3zm-1.396 9.162a.5.5 0 0 1-.708.707l-2-2a.5.5 0 0 1 0-.707l2-2a.5.5 0 0 1 .708.707l-1.147 1.147h5.586l-1.147-1.147a.5.5 0 0 1 .708-.707l2 2a.5.5 0 0 1 0 .707l-2 2a.5.5 0 0 1-.708-.707l1.147-1.146H9.707l1.147 1.146z"
      />
    </symbol>
    <symbol id="generous" viewBox="0 0 18 17">
      <path
        fill="#FF92FC"
        d="M4.77 1.166C7.143-.288 9.943-.424 12.697.992c3.976 2.042 5.502 6.162 4.187 10.435-.415 1.35-1.245 2.698-2.371 3.59-1.14.902-2.604 1.347-4.206.799-1.102-.377-1.79-.967-2.203-1.68-.404-.696-.52-1.462-.574-2.132a25.653 25.653 0 0 1-.039-.586l-.022-.369a4.723 4.723 0 0 0-.101-.76 1.163 1.163 0 0 0-.206-.466.75.75 0 0 0-.386-.244c-.518-.158-.874-.126-1.156-.036-.248.078-.447.2-.689.346-.062.038-.127.078-.197.119-.316.186-.72.396-1.238.37-.514-.025-1.045-.275-1.656-.773-.67-.546-.934-1.31-.938-2.112-.003-.788.243-1.635.614-2.434.737-1.59 2.043-3.15 3.254-3.893zM8.75 4.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM14.5 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-1 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
      />
    </symbol>
    <symbol id="planned" viewBox="0 0 14 14">
      <path
        fill="#FF92FC"
        d="M2.5 0A2.5 2.5 0 0 0 0 2.5V3h14v-.5A2.5 2.5 0 0 0 11.5 0h-9zM14 4H0v7.5A2.5 2.5 0 0 0 2.5 14h9a2.5 2.5 0 0 0 2.5-2.5V4zM5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
      />
    </symbol>
    <symbol id="tree" viewBox="0 0 14 16">
      <path
        fill="#FF92FC"
        d="M7.62.211a1 1 0 0 0-1.238 0l-3.308 2.61c-.805.635-.707 1.743-.058 2.314L1.552 6.342c-.963.794-.573 2.271.51 2.594L.476 10.422c-.986.923-.332 2.577 1.019 2.577H5v1.75c0 .69.56 1.25 1.25 1.25h1.5C8.44 16 9 15.44 9 14.75V13h3.504c1.351 0 2.005-1.655 1.018-2.578l-1.587-1.484c1.086-.32 1.478-1.8.513-2.595l-1.462-1.206c.649-.571.747-1.68-.057-2.314L7.62.212zM6 13h2v1.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25V13z"
      />
    </symbol>
    <symbol id="forest" viewBox="0 0 14 14">
      <path
        fill="#FF92FC"
        d="M0 3.25A3.25 3.25 0 0 1 3.25 0h1a.75.75 0 0 1 0 1.5h-1A1.75 1.75 0 0 0 1.5 3.25v1a.75.75 0 0 1-1.5 0v-1zm14 7.5A3.25 3.25 0 0 1 10.75 14h-1a.75.75 0 0 1 0-1.5h1a1.75 1.75 0 0 0 1.75-1.75v-1a.75.75 0 0 1 1.5 0v1zm0-7.5A3.25 3.25 0 0 0 10.75 0h-1a.75.75 0 0 0 0 1.5h1c.966 0 1.75.784 1.75 1.75v1a.75.75 0 0 0 1.5 0v-1zM3.25 14A3.25 3.25 0 0 1 0 10.75v-1a.75.75 0 0 1 1.5 0v1c0 .966.784 1.75 1.75 1.75h1a.75.75 0 0 1 0 1.5h-1zM7 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
    </symbol>
    <symbol id="optimistic" viewBox="0 0 17 17">
      <path
        fill="#FF92FC"
        d="M11.392 9.515L8.041 5.85a.606.606 0 0 1-.868.01L3.28 1.97a.75.75 0 1 0-1.06 1.06l3.864 3.864a.576.576 0 1 1-.815.815L1.28 3.719A.75.75 0 0 0 .22 4.78l4.052 4.053a.487.487 0 0 1-.689.69L1.28 7.22A.75.75 0 0 0 .22 8.28l3.822 3.822a6.178 6.178 0 0 0-.506.115c-.78.213-1.776.657-2.371 1.607-.254.405-.185.85.054 1.165.227.296.6.478.998.475 2.154-.016 4.77.381 6.853 1.236 1.197.492 2.688.426 3.714-.52l1.25-1.155a3 3 0 0 0 .761-3.296l-.961-2.462-.228.248a1.5 1.5 0 0 1-2.214 0zm-3.669 3.431a.5.5 0 0 1-.446-.894c.603-.3 1.46-.436 2.305-.295.856.143 1.742.577 2.334 1.466a.5.5 0 0 1-.832.554c-.408-.611-1.022-.926-1.666-1.034-.656-.109-1.298.005-1.695.204zm-.385-11.03a3.396 3.396 0 0 0-.29 2.048L5.22 2.03A.75.75 0 1 1 6.28.97c.286.286.652.604 1.058.947zm5.161.087l-.628-.493a2.394 2.394 0 0 0-3.244 3.5l3.503 3.83a.5.5 0 0 0 .738 0l3.504-3.83a2.394 2.394 0 0 0-3.244-3.5l-.629.493z"
      />
    </symbol>
    <symbol id="critical" viewBox="0 0 17 17">
      <path
        fill="#FF92FC"
        d="M17 4.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM12.5 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5zm0 5.125a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25zM16 8.743A5.5 5.5 0 0 1 7.6 2h-5C1.164 2 0 3.149 0 4.566v6.71c0 1.418 1.164 2.566 2.6 2.566h.6v2.171c0 .213.07.42.2.591.33.437.957.526 1.399.2l4.011-2.962h4.59c1.436 0 2.6-1.149 2.6-2.566V8.743z"
      />
    </symbol>
    <symbol id="relaxed" viewBox="0 0 16 16">
      <path
        fill="#A39EFF"
        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm-.5 3a.5.5 0 0 0-.5.5v5l.008.09A.5.5 0 0 0 7.5 9h3l.09-.008A.5.5 0 0 0 10.5 8H8V3.5l-.008-.09A.5.5 0 0 0 7.5 3z"
      />
    </symbol>
    <symbol id="systematic" viewBox="0 0 14 16">
      <path
        fill="#A39EFF"
        d="M8 4.5V0H3.5A1.5 1.5 0 0 0 2 1.5V9h5.5a1.5 1.5 0 1 1 0 3H2v2.5A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5V6H9.5A1.5 1.5 0 0 1 8 4.5zm-4 3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 6a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm5-9V.25L13.75 5H9.5a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"
      />
    </symbol>
    <symbol id="voluntarily" viewBox="0 0 14 14">
      <path
        fill="#A39EFF"
        d="M4.738 13.445A2.986 2.986 0 0 1 3 14 3 3 0 0 1 .555 9.262l4.183 4.183zm5.902-5.358L8.41 9.24a.749.749 0 0 0-.41.664v2.194a.75.75 0 0 0 .41.664l2.23 1.152a.786.786 0 0 0 .72 0l2.23-1.152a.75.75 0 0 0 .41-.664V9.903a.75.75 0 0 0-.41-.664l-2.23-1.152a.787.787 0 0 0-.72 0zm-5.195 4.651A2.987 2.987 0 0 0 6 11a3 3 0 0 0-4.738-2.445l4.183 4.183zM10 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-2zM1.913.674a1.214 1.214 0 0 1 2.174 0l1.78 3.537C6.277 5.03 5.688 6 4.778 6H1.22C.31 6-.28 5.03.133 4.21L1.913.675z"
      />
    </symbol>
    <symbol id="confident" viewBox="0 0 18 16">
      <path
        fill="#A39EFF"
        d="M8.104.899a1 1 0 0 1 1.794 0l1.93 3.911 4.317.627a1 1 0 0 1 .554 1.706l-3.124 3.045.738 4.299a1 1 0 0 1-1.451 1.054l-3.86-2.03-3.862 2.03a1 1 0 0 1-1.45-1.054l.737-4.3-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627L8.104.9zM3.39 10.687a.5.5 0 0 1-.078.703l-2.5 2a.5.5 0 1 1-.624-.78l2.5-2a.5.5 0 0 1 .702.078zM3.312 3.11a.5.5 0 0 1-.624.781l-2.5-2a.5.5 0 1 1 .624-.78l2.5 2zm11.298 7.579a.5.5 0 0 0 .078.702l2.5 2a.5.5 0 1 0 .624-.78l-2.5-2a.5.5 0 0 0-.702.078zm.078-7.579a.5.5 0 0 0 .624.781l2.5-2a.5.5 0 1 0-.624-.78l-2.5 2z"
      />
    </symbol>
    <symbol id="humble" viewBox="0 0 16 14">
      <path
        fill="#A39EFF"
        d="M1.5 8a6.5 6.5 0 1 1 11.101 4.591.75.75 0 1 0 1.062 1.06 8 8 0 1 0-11.326 0A.75.75 0 0 0 3.4 12.59 6.477 6.477 0 0 1 1.5 8zm3 0a3.5 3.5 0 1 1 5.98 2.47.75.75 0 1 0 1.062 1.06 5 5 0 1 0-7.083 0 .75.75 0 0 0 1.062-1.06A3.487 3.487 0 0 1 4.5 8zM8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
      />
    </symbol>
    <symbol id="passionate" viewBox="0 0 12 16">
      <path
        fill="#A39EFF"
        d="M0 9.75c0-.536.063-1.065.188-1.586a5.81 5.81 0 0 1 .585-1.492 8.87 8.87 0 0 0 .125-.227c.042-.078.092-.15.149-.218a.652.652 0 0 1 .18-.165.508.508 0 0 1 .484 0 .44.44 0 0 1 .18.172L2.93 7.93a.49.49 0 0 0 .187.18.627.627 0 0 0 .266.07.49.49 0 0 0 .414-.196.757.757 0 0 0 .133-.64 1.218 1.218 0 0 0-.07-.188 10.424 10.424 0 0 1-.524-1.351 4.92 4.92 0 0 1-.203-1.446c0-.656.11-1.231.328-1.726.219-.495.523-.92.914-1.274.39-.354.846-.64 1.367-.859A8.088 8.088 0 0 1 7.414.008a.486.486 0 0 1 .406.11C7.94.22 8 .348 8 .5c0 .781.133 1.526.398 2.234A7.871 7.871 0 0 0 9.5 4.727l.867 1.132c.292.38.56.776.805 1.188.245.411.443.838.594 1.281.15.443.229.917.234 1.422 0 .557-.068 1.099-.203 1.625a6.145 6.145 0 0 1-.594 1.484c-.26.464-.568.886-.922 1.266a6.01 6.01 0 0 1-1.203.992c-.448.281-.93.498-1.445.649A6.01 6.01 0 0 1 6 16a5.778 5.778 0 0 1-1.633-.227 5.603 5.603 0 0 1-1.437-.648 6.502 6.502 0 0 1-1.211-.992 5.72 5.72 0 0 1-.922-1.274 7.048 7.048 0 0 1-.586-1.484A6.207 6.207 0 0 1 0 9.75z"
      />
    </symbol>
    <symbol id="leader" viewBox="0 0 12 16">
      <path
        fill="#A39EFF"
        d="M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0zM5.847 3.102L5.13 4.655a.175.175 0 0 1-.138.1l-1.698.202a.175.175 0 0 0-.099.302L4.451 6.42a.175.175 0 0 1 .053.163L4.17 8.26c-.03.147.126.26.257.187l1.492-.835a.175.175 0 0 1 .171 0l1.492.835c.13.073.287-.04.258-.187l-.334-1.677a.175.175 0 0 1 .053-.163l1.257-1.16a.175.175 0 0 0-.099-.302L7.02 4.755a.175.175 0 0 1-.138-.1l-.717-1.553a.175.175 0 0 0-.317 0zM6 13a6.968 6.968 0 0 0 4-1.255V15.5a.5.5 0 0 1-.79.407L6 14l-3.21 1.907A.5.5 0 0 1 2 15.5v-3.755A6.968 6.968 0 0 0 6 13z"
      />
    </symbol>
    <symbol id="follower" viewBox="0 0 15 14">
      <path
        fill="#A39EFF"
        d="M5.75 2.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zM1 5a1 1 0 0 0-1 1v4.5a3.5 3.5 0 1 0 7 0V6a1 1 0 0 0-1-1H1zm5.75-2.75c0 .65-.19 1.255-.52 1.763.413.048.787.22 1.084.48A2.25 2.25 0 1 0 6.187.422c.355.52.563 1.15.563 1.827zM6.5 13.855A4.489 4.489 0 0 0 8 10.5V6a1.99 1.99 0 0 0-.268-1H10a1 1 0 0 1 1 1v4.5a3.5 3.5 0 0 1-4.5 3.355zM10.75 2.25c0 .65-.19 1.255-.52 1.763.413.048.787.22 1.084.48a2.25 2.25 0 1 0-1.127-4.07c.355.52.563 1.15.563 1.827zm-.25 11.605A4.489 4.489 0 0 0 12 10.5V6c0-.364-.098-.706-.268-1H14a1 1 0 0 1 1 1v4.5a3.5 3.5 0 0 1-4.5 3.355z"
      />
    </symbol>
    <symbol id="result" viewBox="0 0 15 16">
      <path
        fill="#A39EFF"
        d="M11 .75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-.69L9.03 7.03a.75.75 0 0 1-1.06 0L5.5 4.56 1.28 8.78A.75.75 0 0 1 .22 7.72l4.75-4.75a.75.75 0 0 1 1.06 0L8.5 5.44l3.94-3.94h-.69A.75.75 0 0 1 11 .75zM.75 12a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 .75 12zM5.5 9.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5zM8.75 11a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75zm4.75-3.25a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5z"
      />
    </symbol>
    <symbol id="check" viewBox="0 0 12 9">
      <path
        fill="#fff"
        d="M11.614.157a.5.5 0 0 1-.021.707l-7.93 7.474a.6.6 0 0 1-.839-.016l-2.68-2.72A.5.5 0 1 1 .856 4.9l2.406 2.442L10.907.136a.5.5 0 0 1 .707.021z"
      />
    </symbol>
    <symbol id="home" viewBox="0 0 20 22">
      <path
        fill="#394046"
        d="M8.592.495a2.25 2.25 0 0 1 2.816 0l7.75 6.218A2.25 2.25 0 0 1 20 8.468v11.28a2.25 2.25 0 0 1-2.25 2.25h-3a2.25 2.25 0 0 1-2.25-2.25v-6a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v6a2.25 2.25 0 0 1-2.25 2.25h-3A2.25 2.25 0 0 1 0 19.749V8.469c0-.682.31-1.328.842-1.755L8.592.495zm1.877 1.17a.75.75 0 0 0-.938 0L1.78 7.883a.75.75 0 0 0-.281.585v11.28c0 .415.336.75.75.75h3a.75.75 0 0 0 .75-.75v-6a2.25 2.25 0 0 1 2.25-2.25h3.5a2.25 2.25 0 0 1 2.25 2.25v6c0 .415.336.75.75.75h3a.75.75 0 0 0 .75-.75V8.469a.75.75 0 0 0-.28-.585l-7.75-6.218z"
      />
    </symbol>
    <symbol id="add-person" viewBox="0 0 25 25">
      <path
        fill="#394046"
        d="M13.114 23.719a7.533 7.533 0 0 1-1.04-1.35c-.655.085-1.348.131-2.074.131-5.111 0-8.5-2.111-8.5-4.785V17l.007-.145A1.5 1.5 0 0 1 3 15.5h8.624A7.486 7.486 0 0 1 12.5 14H3a3 3 0 0 0-3 3v.715C0 21.433 4.21 24 10 24a16.81 16.81 0 0 0 3.114-.281zM16 6A6 6 0 1 0 4 6a6 6 0 0 0 12 0zM5.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0zm13 19a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-11a.5.5 0 0 1 .5.5V18h3.5a.5.5 0 0 1 0 1H19v3.5a.5.5 0 0 1-1 0V19h-3.5a.5.5 0 0 1 0-1H18v-3.5a.5.5 0 0 1 .5-.5z"
      />
    </symbol>
    <symbol id="alert-focus" viewBox="0 0 20 22">
      <path
        fill="#394046"
        d="M13.471 19.002a3.502 3.502 0 0 1-6.931 0h6.931zM10.006 0a8.501 8.501 0 0 1 8.497 8.246v.255h.004v4.112l1.414 3.644c.038.099.064.201.076.306l.01.157a1.28 1.28 0 0 1-1.149 1.274l-.13.006H1.28a1.28 1.28 0 0 1-1.234-1.62l.041-.124 1.417-3.644v-4.11A8.501 8.501 0 0 1 10.006 0z"
      />
    </symbol>
    <symbol id="home-focus" viewBox="0 0 20 22">
      <path
        fill="#394046"
        d="M11.408.495a2.25 2.25 0 0 0-2.816 0L.842 6.712A2.25 2.25 0 0 0 0 8.467v11.28a2.25 2.25 0 0 0 2.25 2.25h2.5A2.25 2.25 0 0 0 7 19.747v-5.5c0-.69.56-1.25 1.25-1.25h3.5c.69 0 1.25.56 1.25 1.25v5.5a2.25 2.25 0 0 0 2.25 2.25h2.5a2.25 2.25 0 0 0 2.25-2.25V8.467a2.25 2.25 0 0 0-.842-1.755L11.408.495z"
      />
    </symbol>
    <symbol id="mypage" viewBox="0 0 24 20">
      <path
        fill="#394046"
        d="M12.996 7.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75zm.75 3.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5zm-4.5-3.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0zm-4.25 2.75h5a1 1 0 0 1 1 1v.5s-.5 2.5-3.5 2.5-3.5-2.5-3.5-2.5v-.5a1 1 0 0 1 1-1zM0 2.75A2.75 2.75 0 0 1 2.75 0h18.497a2.75 2.75 0 0 1 2.75 2.75v14.5a2.75 2.75 0 0 1-2.75 2.75H2.75A2.75 2.75 0 0 1 0 17.25V2.75zM2.75 1.5c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25h18.497c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25H2.75z"
      />
    </symbol>
    <symbol id="relation" viewBox="0 0 17 17">
      <path
        fill="#A39EFF"
        d="M7 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2.009 9A2.001 2.001 0 0 0 0 11c0 1.691.833 2.966 2.135 3.797C3.417 15.614 5.145 16 7 16c.955 0 1.876-.102 2.72-.313l-1.83-2.002A3.394 3.394 0 0 1 7.987 9h-5.98zm10.49 1.003l-.628-.493a2.394 2.394 0 0 0-3.244 3.5l3.503 3.83a.5.5 0 0 0 .738 0l3.504-3.83a2.394 2.394 0 0 0-3.244-3.5l-.629.493z"
      />
    </symbol>
    <symbol id="mypage-focus" viewBox="0 0 24 20">
      <path
        fill="#394046"
        d="M2.75 0A2.75 2.75 0 0 0 0 2.75v14.5A2.75 2.75 0 0 0 2.75 20h18.497a2.75 2.75 0 0 0 2.75-2.75V2.75A2.75 2.75 0 0 0 21.247 0H2.75zm10.246 7.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75zm.75 3.25h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5zm-4.5-3.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0zm-4.25 2.75h5a1 1 0 0 1 1 1v.5s-.5 2.5-3.5 2.5-3.5-2.5-3.5-2.5v-.5a1 1 0 0 1 1-1z"
      />
    </symbol>
    <symbol id="people" viewBox="0 0 24 22">
      <path
        fill="#394046"
        d="M15.254 8a2.25 2.25 0 0 1 2.25 2.25v6.249a5.501 5.501 0 0 1-11.002 0V10.25A2.25 2.25 0 0 1 8.752 8h6.502zm0 1.5H8.752a.75.75 0 0 0-.75.75v6.249a4.001 4.001 0 0 0 8.002 0V10.25a.75.75 0 0 0-.75-.75zM2.25 8h4.156a3.244 3.244 0 0 0-.817 1.5H2.25a.75.75 0 0 0-.75.75v5.249a3.001 3.001 0 0 0 4.238 2.735c.133.49.324.956.564 1.392A4.501 4.501 0 0 1 0 15.499V10.25A2.25 2.25 0 0 1 2.25 8zm19.5 0A2.25 2.25 0 0 1 24 10.25v5.25a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.214-.406.387-.837.511-1.289A3 3 0 0 0 22.5 15.5v-5.25a.75.75 0 0 0-.749-.75h-3.333A3.243 3.243 0 0 0 17.6 8h4.151zM12 0a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm8.003 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM3.997 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM12 1.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8.003 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-16.006 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
      />
    </symbol>
    <symbol id="process" viewBox="0 0 17 17">
      <path
        fill="#FF744D"
        d="M3.868 1.166C6.24-.288 9.04-.424 11.795.992c3.976 2.042 5.502 6.162 4.187 10.435-.415 1.35-1.245 2.698-2.372 3.59-1.14.902-2.603 1.347-4.205.799-1.103-.377-1.79-.967-2.204-1.68-.404-.696-.519-1.462-.574-2.132a25.653 25.653 0 0 1-.038-.586c-.008-.132-.015-.259-.023-.369a4.725 4.725 0 0 0-.1-.76 1.163 1.163 0 0 0-.206-.466.75.75 0 0 0-.387-.244C5.356 9.42 5 9.453 4.718 9.543c-.248.078-.447.2-.69.346a17.07 17.07 0 0 1-.196.119c-.316.186-.72.396-1.239.37-.514-.025-1.045-.275-1.655-.773C.268 9.06.003 8.295 0 7.493c-.003-.788.243-1.635.614-2.434.737-1.59 2.043-3.15 3.254-3.893zm3.98 3.584a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM13.598 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-1 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
      />
    </symbol>
    <symbol id="project-focus" viewBox="0 0 19 24">
      <path
        fill="#394046"
        d="M11.375 1.75H7.292a.875.875 0 1 0 0 1.75h4.083a.875.875 0 0 0 0-1.75zm0-1.75c1.329 0 2.427.988 2.601 2.269l.016.158-.008-.094h2.058a2.625 2.625 0 0 1 2.625 2.625v15.75a2.625 2.625 0 0 1-2.625 2.625H2.625A2.625 2.625 0 0 1 0 20.708V4.958a2.625 2.625 0 0 1 2.625-2.625h2.058l-.01.094.018-.158A2.626 2.626 0 0 1 7.29 0h4.084zm.292 17.5h-7a.875.875 0 0 0 0 1.75h7a.875.875 0 1 0 0-1.75zm-2.334-4.667H4.667a.875.875 0 0 0 0 1.75h4.666a.875.875 0 1 0 0-1.75zM14 8.167H4.667a.875.875 0 1 0 0 1.75H14a.875.875 0 0 0 0-1.75z"
      />
    </symbol>
    <symbol id="people-focus" viewBox="0 0 24 22">
      <path
        fill="#394046"
        d="M15.754 8c.967 0 1.75.784 1.75 1.75v6.749a5.501 5.501 0 0 1-11.002 0V9.75c0-.966.783-1.75 1.75-1.75h7.502zM1.75 8l4.382-.002a2.73 2.73 0 0 0-.621 1.532l-.01.22v6.749c0 1.133.291 2.199.8 3.127A4.501 4.501 0 0 1 0 15.499V9.75A1.752 1.752 0 0 1 1.751 8zm16.124-.002L22.25 8c.966 0 1.75.784 1.75 1.75v5.75a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.429-.813.69-1.729.738-2.7l.008-.326V9.75c0-.666-.237-1.276-.63-1.752zM12 0a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm8.003 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM3.997 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
      />
    </symbol>
    <symbol id="project" viewBox="0 0 19 24">
      <path
        fill="#394046"
        d="M11.375 0c1.39 0 2.527 1.08 2.619 2.445l.006.18a2.56 2.56 0 0 0-.016-.292h2.058a2.625 2.625 0 0 1 2.625 2.625v15.75a2.625 2.625 0 0 1-2.625 2.625H2.625A2.625 2.625 0 0 1 0 20.708V4.958a2.625 2.625 0 0 1 2.625-2.625h2.058a2.646 2.646 0 0 0-.015.206l-.001.086A2.625 2.625 0 0 1 7.292 0h4.083zm0 5.25H7.292c-.927 0-1.741-.48-2.208-1.205l.025.039H2.625a.875.875 0 0 0-.875.874v15.75c0 .484.392.875.875.875h13.417a.875.875 0 0 0 .875-.875V4.958a.875.875 0 0 0-.875-.875h-2.484l.025-.038a2.623 2.623 0 0 1-2.208 1.205zm0-3.5H7.292a.875.875 0 1 0 0 1.75h4.083a.875.875 0 0 0 0-1.75zM4.667 14.583h4.666a.875.875 0 1 0 0-1.75H4.667a.875.875 0 0 0 0 1.75zm0-4.666H14a.875.875 0 0 0 0-1.75H4.667a.875.875 0 1 0 0 1.75zm0 9.333h7a.875.875 0 1 0 0-1.75h-7a.875.875 0 0 0 0 1.75z"
      />
    </symbol>
    <symbol id="alert" viewBox="0 0 20 22">
      <path
        fill="#394046"
        d="M10.006 0a8.501 8.501 0 0 1 8.497 8.246l.004.255v4.612l1.414 3.644c.038.098.064.201.076.305l.01.158a1.28 1.28 0 0 1-1.149 1.273l-.13.007-5.221.001a3.501 3.501 0 0 1-6.998.192l-.005-.194-5.224.001a1.28 1.28 0 0 1-1.234-1.62l.041-.124 1.417-3.644v-4.61A8.501 8.501 0 0 1 10.006 0zM12 18.65l.005-.151-4.002.002a2.001 2.001 0 0 0 3.998.15zM10.006 1.5a7.001 7.001 0 0 0-6.998 6.76l-.004.241v4.752a.75.75 0 0 1-.022.184l-.029.088L1.602 17h16.804l-1.348-3.474a.748.748 0 0 1-.046-.18l-.005-.092V8.501A7.001 7.001 0 0 0 10.006 1.5z"
      />
    </symbol>
  </svg>
);

export function GlobalSprite() {
  return createPortal(svgSpriteCode, document.body);
}
