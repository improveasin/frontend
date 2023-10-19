<template>

  <div id="feedback-container">

    <a href="https://improveasin.clearflask.com/">
      Gib uns Dein Feedback oder Verbesserungsvorschläge!
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> -->
      <svg focusable="false" width="24" height="24" fill="white" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></svg>
    </a>

  </div>


</template>

<style>
  #feedback-container a {
    color: white
  }

  #feedback-container a:hover {
    color: lightgray;
    text-decoration: none;
  }



  #feedback-container {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background: #EC7117;

    height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #feedback-container svg {
    margin-left: 10px;
  }
</style>
