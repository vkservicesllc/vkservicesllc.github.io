$( () => {

  const shortcuts =
  `<legend>Shortcuts</legend>
  <table class="shcuts1">
    <tr>
      <td>
        <a class="h" target="_blank"
        href="https://drive.google.com/drive/folders/1HLWwjjp85TrvblKI65Z0PkI8ze4cSWMW">
        + Add WORKSHEET</a>
      </td>
      <td>
        <a class="h" target="_blank"
        href="https://drive.google.com/drive/u/0/folders/0BxIwWlTHHQp7fjF4VVpZZzNhUzJsMk9XZlQxN09DRkhVZVcwcnFUUGJkN0VKRWJhNUh1V0U">
        Scans</a>
      </td>
      <td>
        <a class="h" target="_blank"
        href="https://drive.google.com/drive/u/0/folders/0BxIwWlTHHQp7fmJYa21WcTMxUDBxakZtXzl3N0o5SGpvUlRxWFVrZmZXblVhdFl6NW42R2c">
        Expense</a>
      </td>
      <td>
        <a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/d/1vInI27Gj3mI0dz--03pbZt4TtuGdF_DZPNPVR5Vc3jM/edit#gid=0">
        Document Submission</a>
      </td>
      <td>
        <a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/d/1wODl9QHnhej3ySdV110MpQvL0tNIr9IQbLqlDXOvTkM/edit#gid=0">
        Payroll List</a>
      </td>
      <td>
        <a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/d/1OxJYhP2azeOHKGmkaNLxv2IuBjLoAZbTncOJsliwdzc/edit#gid=1592335978">
        Students</a>
      </td>
    </tr>
  </table>
  <table class="shcuts2">
    <tr>
      <td id='repD'></td>
      <td>
        <a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/d/1QOqM8xouEbOFxn_Ktenx_LGB2AzBEnfFrxOisSKzSkg/edit?ts=567805bc#gid=0">
        Truck/Trailer Breakdown</a>
      </td>
      <td>
        <a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/d/1SgC9L_M-5FNgvXV5hQJJQ4AggehmPo9ipB5Z1aHK_V0/edit?ts=5a4beef8#gid=0">
        DEF Tracker</a>
      </td>
      <td>
        <a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/d/1FsrNZ2zATp2nF8ctbkhOf8fUllA4-C8370-UkNnRrm0/edit?pli=1#gid=0">
        Rate List</a>
      </td>
      <td>
        <a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/d/1XIJ5TR1zuEODW8CRWTSd2QNNlyYexa5OwGLoVvnMmnk/edit#gid=1229815017">
        Towing</a>
      </td>
      <td>
        <a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/u/1/d/1jegJ8tzV45X7U0jAdHurdhE8rWrO8891h23fB-x1NLw/htmlview?sle=true#">
        Phone List</a>
      </td>
    </tr>
  </table>`;

  const additional =
  `<legend>Additional Tools (Local Only)</legend>
  <table class="tools">
    <tr>
      <td><a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/d/1gi4qgkyggoxXMbc2JTVW-Q38dyGjCyPWcxctblexrWo/edit?ts=5f92ea69#gid=0">
        5 Day Local</a></td>
      <td><a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/d/1AoyXGtUIOiGq9siawF-WnBP4XgVgur-wWRgyilM0j2A/edit?ts=5a673d3b#gid=1558692306">
        Detention Board</a></td>
      <td><a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/d/173n-J5qtZKtqg4MHOZ3oUFgJo9ZmVzjFs2Zxn8Nbdug/edit?ts=5a673d8d#gid=90">
        West Coast Board</a></td>
      <td><a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/d/1y82rNeg66Hh9DIduNXj0fTeIErlJn7B0Xe4-s59RHq4/edit?ts=5a673d99#gid=1275085378">
        West Coast AVG Rates</a></td>
    </tr>
  </table>`;

  const shortcuts2 =
  `<legend>Shortcuts</legend>
  <table class="shcuts1">
    <tr>
      <td>
        <a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/u/1/d/1jegJ8tzV45X7U0jAdHurdhE8rWrO8891h23fB-x1NLw/htmlview?sle=true#">
        Phone List</a>
      </td>
      <td>
        <a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/d/19koCtNrSbUujxfcZfqA5ZCHCvkPCvgw7-lUaK0gBQNU/edit?ts=5a79d31c#gid=0">
        Global Board 1</a>
      </td>
      <td>
        <a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/d/1lWaqBNQXaqhoQXOUGn2mjFpzjqm7B1JHjuSzGOcJgSg/edit?ts=5a79d2fd#gid=0">
        Global Board 2</a>
      </td>
      <td>
        <a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/d/1vWEz3xsbWCoVAF44S9rTAZXMQKRfAi7A49c-QFxJA1g/edit?ts=5a79e18d#gid=0">
        Global Board 3</a>
      </td>
      <td>
        <a class="h" target="_blank"
        href="https://docs.google.com/spreadsheets/d/1C1cEGyX7NKElc7IM1lhGZlw2W6dKH92uy5yElLKj6Vs/edit#gid=814976157">
        Money Codes <span>CL/CT</span></a>
      </td>
    </tr>
  </table>`;

  setInnerHtml('shortcuts', shortcuts);
  setInnerHtml('additional', additional);
  setInnerHtml('shortcuts2', shortcuts2);

  function setInnerHtml(id, content) {
    var $el = $(`#${id}`);
    if ($el) $el.html(content);
  }

});
