<template>
  <div class="flex flex-col">
    <ContentBlock header="IRC Information">
      <div class="flex flex-col">
        <div class="flex">To connect to Darchoods IRC network, you can use the following details.</div>
        <div class="flex flex-col w-full">
          <div class="flex flex-col lg:flex-row w-full">
            <div class="flex w-full lg:w-2/4 p-2 border font-semibold">Server:</div>
            <div class="flex w-full lg:w-3/4 p-2 border">irc.darchoods.net</div>
          </div>
          
          <div class="flex flex-col lg:flex-row w-full">
            <div class="flex w-full lg:w-2/4 p-2 border font-semibold">Port:</div>
            <div class="flex w-full lg:w-3/4 p-2 border">6667</div>
          </div>

          <div class="flex flex-col lg:flex-row w-full">
            <div class="flex w-full lg:w-2/4 p-2 border font-semibold">Channel:</div>
            <div class="flex w-full lg:w-3/4 p-2 border">#darchoods</div>
          </div>
        </div>
      </div>
    </ContentBlock>

    <ContentBlock header="Users in #Darchoods">
      <ul>
        <li>~xLink</li>
        <li>~narada</li>
        <li>...</li>
      </ul>
    </ContentBlock>
  </div>
</template>