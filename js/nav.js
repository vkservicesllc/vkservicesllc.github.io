$( () => {

  const efs = `<li><a target="_blank" class="bl h"
          href="https://www.tch.com/security/logon.jsp">
          EFS</a>
        </li>`,

        dropbox = `<li><a target="_blank" class="h"
          href="https://www.dropbox.com/home">
          Dropbox</a>
        </li>`,

        drive = `<li><a target="_blank" class="h"
          href="https://drive.google.com/drive/my-drive">
          G-Drive</a>
        </li>`,

        mail = `<li><a target="_blank" class="h"
          href="https://mail.google.com/mail/u/0/#inbox">
          Gmail <em>Prim</em></a>
          <ul class="sub2">
            <li><a target="_blank" class="bl h"
              href="https://mail.google.com/mail/u/1/#inbox">
              Gmail <em>Sec</em></a></li>
            <li><a target="_blank" class="bl h"
              href="https://mail.google.com/mail/u/2/#inbox">
              Gmail <em>Ter</em></a></li>
          </ul>
        </li>`,

        hangouts = `<li><a target="_blank" class="h"
          href="https://hangouts.google.com/">
          Hangouts <em>Prim</em></a>
          <ul class="sub2">
            <li><a target="_blank" class="bl h"
              href="https://hangouts.google.com/?authuser=1">
              Hangouts <em>Sec</em></a></li>
            <li><a target="_blank" class="bl h"
              href="https://hangouts.google.com/?authuser=2">
              Hangouts <em>Ter</em></a></li>
          </ul>
        </li>`,

        map = `<li><a target="_blank" class="h"
          href="https://www.google.com/maps/@35.5710764,-82.5803167,12z">
          G-Maps</a>
        </li>`,

        tracking = `<li><a class="dropdown"
          href="">
          Tracking Apps &#9662;</a>
          <ul class="sub2">
                            <li><a target="_blank" class="bl h"
                              href="https://transportation.us.spireon.com/home/signin">
                              FleetLocate</a></li>
            <li><a target="_blank" class="bl h"
              href="https://track.rpmdispatch.com/v2/#!/login">
              <em>New</em></a></li>
            <li><a target="_blank" class="bl h"
              href="https://track.rpmdispatch.com/user/login#!/login">
              <em>Old</em></a></li>
          </ul>
        </li>`,

        rpm = `<li><a class="dropdown"
          href="">
          RPM &#9662;</a>
          <ul class="sub2">
            <li><a target="_blank" class="bl h"
              href="http://rpmcarolina.com/default.aspx">
              CL</a></li>
            <li><a target="_blank" class="bl h"
              href="https://rpmdispatch.pinghq.com/">
              CL(R)</a></li>
            <li><a target="_blank" class="bl h"
              href="http://www.rpmowners.com/default.aspx">
              CT</a></li>
            <li><a target="_blank" class="bl h"
              href="http://dispatchdelta.com/default.aspx">
              DE</a></li>
          </ul>
        </li>`,

        add = `<li><a class="dropdown"
          href="">
          + New &#9662;</a>
          <ul class="sub2">
            <li><a target="_blank" class="bl h"
              href="https://drive.google.com/drive/folders/1GuP0ad8znZxIZ34fzsqW000x7SMYFovH">
              URLs(W)</a></li>
            <li><a target="_blank" class="bl h"
              href="https://drive.google.com/drive/folders/10GJhehRuVkQsMlXS3NEV5ymEV74bgVYo">
              EFSC(M)</a></li>
            <li><a target="_blank" class="bl h"
              href="https://drive.google.com/drive/folders/1S01wzvFY7Qb2AWeJDa5iB0L5Gdydjqh6">
              MC(M)</a></li>
          </ul>
        </li>`,

        database = `<li><a class="dropdown"
          href="">
          Database &#9662;</a>
          <ul class="sub2 right">
            <li><a target="_blank" class="bl e"
              href="">
              Fleet &#9656;</a>
              <ul class="sub3 left">
                <li><a target="_blank" class="h"
                  href="https://docs.google.com/spreadsheets/d/1W_uZrNoAIvL3HoWrdfbfGAyNC1gSiqqEvN_JV3gS9Eg/edit#gid=709800642">
                  Carriers</a></li>
                <li><a target="_blank" class="h"
                  href="https://docs.google.com/spreadsheets/d/1W_uZrNoAIvL3HoWrdfbfGAyNC1gSiqqEvN_JV3gS9Eg/edit#gid=1647351910">
                  Units</a></li>
                <li><a target="_blank" class="h"
                  href="https://docs.google.com/spreadsheets/d/1nPg7IBUkiZQD8gyEcsn2N0ohKWavZcp4h9ATOpJvvak/edit#gid=1639097179">
                  Units <em>Dist</em></a></li>
              </ul>
            </li>
            <li><a target="_blank" class="bl e"
              href="">
              People &#9656;</a>
              <ul class="sub4 left">
                <li><a target="_blank" class="h"
                  href="https://docs.google.com/spreadsheets/d/1h-PLcbXzbKPtgrGN6cMFit6ML6hVzXrxec48ekCpsVE/edit#gid=2023496076">
                  Contractors</a></li>
                <li><a target="_blank" class="h"
                  href="https://docs.google.com/spreadsheets/d/1W_uZrNoAIvL3HoWrdfbfGAyNC1gSiqqEvN_JV3gS9Eg/edit#gid=1909787109">
                  Employees</a></li>
                <li><a target="_blank" class="h"
                  href="https://docs.google.com/spreadsheets/d/1vbXFRl_n_1ylQvThBBCas_VddiLreLIq5oJ3enjAWfE/edit#gid=1376527364">
                  EFS Users</a></li>
              </ul>
            </li>
            <li><a target="_blank" class="bl e"
              href="">
              Rates &#9656;</a>
              <ul class="sub5 left">
                <li><a target="_blank" class="h"
                  href="https://docs.google.com/spreadsheets/d/1h-PLcbXzbKPtgrGN6cMFit6ML6hVzXrxec48ekCpsVE/edit#gid=766944046">
                  Basic</a></li>
                <li><a target="_blank" class="h"
                  href="https://docs.google.com/spreadsheets/d/1h-PLcbXzbKPtgrGN6cMFit6ML6hVzXrxec48ekCpsVE/edit#gid=643630212">
                  Canada</a></li>
                <li><a target="_blank" class="h"
                  href="https://docs.google.com/spreadsheets/d/1h-PLcbXzbKPtgrGN6cMFit6ML6hVzXrxec48ekCpsVE/edit#gid=702297004">
                  Regular Stops</a></li>
                <li><a target="_blank" class="h"
                  href="https://docs.google.com/spreadsheets/d/1h-PLcbXzbKPtgrGN6cMFit6ML6hVzXrxec48ekCpsVE/edit#gid=1091142582">
                  Extra Stops</a></li>
                <li><a target="_blank" class="h"
                  href="https://docs.google.com/spreadsheets/d/1h-PLcbXzbKPtgrGN6cMFit6ML6hVzXrxec48ekCpsVE/edit#gid=1270985435">
                  Towing</a></li>
                <li><a target="_blank" class="h"
                  href="https://docs.google.com/spreadsheets/d/1h-PLcbXzbKPtgrGN6cMFit6ML6hVzXrxec48ekCpsVE/edit#gid=2102185617">
                  Bonuses</a></li>
                <li><a target="_blank" class="h"
                  href="https://docs.google.com/spreadsheets/d/1h-PLcbXzbKPtgrGN6cMFit6ML6hVzXrxec48ekCpsVE/edit#gid=916575852">
                  Charges <span>&</span> Company Reimbursement</a></li>
              </ul>
            </li>
            <li><a target="_blank" class="bl e"
              href="">
              HR &#9656;</a>
              <ul class="sub6 left">
                <li><a target="_blank" class="h"
                  href="https://docs.google.com/spreadsheets/d/1Kbtbl37ZrixrErzlH-wn4xPvjVGmWzAMzjne4JNmnsA/edit#gid=1489386937">
                  Hired <span>/</span> Leaving</a></li>
                <li><a target="_blank" class="h"
                  href="https://docs.google.com/spreadsheets/d/1qvBdZTacKE63Z9VrIPSZkaN5ugNf2D38J6AzcmpZCak/edit#gid=1142558256">
                  Driver Chart</a></li>
              </ul>
            </li>
            <li><a target="_blank" class="bl h" style="text-align: left"
              href="https://docs.google.com/spreadsheets/d/1W_uZrNoAIvL3HoWrdfbfGAyNC1gSiqqEvN_JV3gS9Eg/edit#gid=2113127033">
              Expenses</a></li>
            <li><a target="_blank" class="bl h" style="text-align: left"
              href="https://docs.google.com/spreadsheets/d/1h-PLcbXzbKPtgrGN6cMFit6ML6hVzXrxec48ekCpsVE/edit#gid=578326070">
              Methods</a></li>
          </ul>
        </li>`,

        misc = `<li><a class="dropdown"
          href="">
          Other <span>&</span> Misc &#9662;</a>
          <ul class="sub2">
            <li><a target="_blank" class="bl h"
              href="https://drivershr.com/hrm/login.php">
              HRM</a></li>
            <li><a target="_blank" class="bl h"
              href="https://val.drivershr.com/trip-report/login.php">
              TRG</a></li>
            <li><a target="_blank" class="bl h"
              href="https://docs.google.com/spreadsheets/d/19koCtNrSbUujxfcZfqA5ZCHCvkPCvgw7-lUaK0gBQNU/edit?ts=5a79d31c#gid=0">
              Global Board 1</a></li>
            <li><a target="_blank" class="bl h"
              href="https://docs.google.com/spreadsheets/d/1lWaqBNQXaqhoQXOUGn2mjFpzjqm7B1JHjuSzGOcJgSg/edit?ts=5a79d2fd#gid=0">
              Global Board 2</a></li>
            <li><a target="_blank" class="bl h"
              href="https://docs.google.com/spreadsheets/d/1vWEz3xsbWCoVAF44S9rTAZXMQKRfAi7A49c-QFxJA1g/edit?ts=5a79e18d#gid=0">
              Global Board 3</a></li>
            <li><a target="_blank" class="bl h"
              href="https://docs.google.com/spreadsheets/d/1vWEz3xsbWCoVAF44S9rTAZXMQKRfAi7A49c-QFxJA1g/edit?ts=5a79e18d#gid=0">
              Owners <em>CL/CT</em></a></li>
            <li><a target="_blank" class="bl h"
              href="https://docs.google.com/spreadsheets/d/1nYbhkOQY2LqK39rTQGbVSlqrtjbTr97r5bjU1kYGxSQ/edit?ts=606dcb95#gid=0">
              Carriers</a></li>
            <li><a target="_blank" class="bl h"
              href="https://docs.google.com/spreadsheets/d/1tshqCJ1P7Bba46DeEkI8R3PeUqC25nuJ2oNtjy_TCec/edit#gid=978596437">
              Distributor</a></li>
            <li><a target="_blank" class="bl h"
              href="https://docs.google.com/spreadsheets/d/1txvIsV3jk5qx1Dp233_PQeSyoy64Fwv-cIWVW2-A5AI/edit#gid=51909676">
              Zoho Invoices</a></li>
            <li><a target="_blank" class="bl h"
              href="https://docs.google.com/spreadsheets/d/1qc17LJIBoFAMPf0PZf8kn5zYghyV8GzHeIKVU0t3WTo/edit#gid=0">
              EFS Accounts</a></li>
            <li><a target="_blank" class="bl h"
              href="https://docs.google.com/spreadsheets/d/1lS8mGmZprsR8LNgb1BzcznEl2rkv-0uBDYbJkguXGis/edit#gid=176549183">
              EFS Users</a></li>
            <li><a target="_blank" class="bl h"
              href="https://docs.google.com/spreadsheets/d/1OjS_7GORdyiMHOTpp9EVylR7qn7tPeMnOhbF0yVS8rk/edit#gid=0">
              EFS Issues</a></li>
            <li><a target="_blank" class="bl h"
              href="https://docs.google.com/spreadsheets/d/19tBRKV_SZK3Wg4b5dabtIoTapz5iO4n0GN0K3eovWMc/edit#gid=1990489309">
              Towing <em>Input</em></a></li>
            <li><a target="_blank" class="bl h"
              href="https://docs.google.com/spreadsheets/d/1MOB1zwdD4aHmtpSrcNg8F2J9Ngx8k9sJRNpvZ74nbPQ/edit#gid=0">
              Students <em>Old</em></a></li>
            <li><a target="_blank" class="bl h"
              href="https://docs.google.com/spreadsheets/d/1C1cEGyX7NKElc7IM1lhGZlw2W6dKH92uy5yElLKj6Vs/edit#gid=814976157">
              Owners<br/><em>Money Codes</em></a></li>
            <li><a target="_blank" class="bl h"
              href="https://drive.google.com/drive/folders/1je2O4kPEP3ZuJv0cTFY53BPJLbZXZlxp">
              Database</a></li>
            <li><a target="_blank" class="bl h"
              href="https://drive.google.com/drive/folders/0BwZYC9bOkSa5S2taNmNkVUJXX3M">
              Tools <em>Backup</em></a></li>
          </ul>
        </li>`;


  $('#top').html(`<ul class="sub1">
    ${efs}
    ${dropbox}
    ${drive}
    ${mail}
    ${hangouts}
    ${map}
    ${tracking}
    ${rpm}
    ${add}
    ${database}
    ${misc}
  </ul>`);

});
