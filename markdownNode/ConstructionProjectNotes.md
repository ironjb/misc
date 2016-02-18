#Construction Project Notes
- - -

- - -

##Services

- - -

> ###Index
- Add Activity, Address, and Installed Date (not in database)

<!--
- ~~Remove Contact Name~~
-->

> ###Details
- Tasks:
	- Marketing Data
	- Add Service Activity (was Modify Service Line)
	- Create Repair
	- Extend Stub
	- Cancel Service
- ~~Include Cancel Date on Tracking tab~~
- if Stub is extended, status needs to change at service level
- Service Line Activity tab
	- ~~Install Date goes away~~
	- ~~Start open instead of collapsed~~
	- ~~Order by Activity Date~~

<!--
-->

> ###Enter Markinging Data
- ~~Area Id not needed~~
- Dealer will be DDL of resources or will be removed?

<!--
> ###~~Add Premises~~ (removed)
- ~~Adds Premise to Premise table - associated with Service Line~~
- ~~Can have multiple Premises (table)~~
-->


<!--
> ###~~Change Premise~~ (removed)
- ~~Does this go below Service Details?~~
- ~~Search appears to search through all Premise~~
- ~~Premise is selected from list to update~~
-->

##Projects

- - -

> ###Index
- ~~Export needs: Approve Date, District, Location, WorkOrder~~

<!--
- spinner while loading
- Widen Main (first table column)
- ~~Add Approve Date?~~
- ~~Add region/district DDL.  DDL grouped by region (Mains table needs district column)~~

>		Region
			|
			-District
- ~~Remove **Project**, **Create** columns from list~~
- ~~Add **Work Order #**~~
- ~~Start page by filtering by district (boise 425)~~
- ~~Session cookie or sessionStorage (cookie goes away on browser close) to keep track of search when they come back to search page.~~
- ~~Remove Approve and add Subdivision~~
- Can remove Activity if fields too squished
-->

> ###Create Page

<!--
- Are checkboxes needed for 'Statistic Sheet' 'Revised Indicator' and 'Joint Trench'?
- Drop down needed for 'Plant Type', and  'Project (Main) Description'?
- Text fields for 'Grid Map Number 1', and  'Grid Map Number 2'?
- ~~Should 'Location' be a textarea?~~
- ~~Remove County field~~
- Validation
	- ~~should we use popovers for data validation? [http://stackoverflow.com/a/21638591](http://stackoverflow.com/a/21638591)~~
	- ~~manual popover? not including the mouseover stuff... [http://stackoverflow.com/a/17997192](http://stackoverflow.com/a/17997192)~~
	- ~~got it working with .on('change/blur',...) ngChange from code... actually you can use watch [http://stackoverflow.com/a/23280861](http://stackoverflow.com/a/23280861)~~
	- ~~use watch ngModel in directive? [http://stackoverflow.com/a/14568170](http://stackoverflow.com/a/14568170)~~
	- ~~Contract drop down should have Type A, Type B, and None (Steve said he would fix this in database)~~
- ~~Main number rename to project number~~
- ~~Rename main type to activity~~
- ~~Plant type rename to project type~~
- ~~No reactivation in project type ddl~~
- ~~Put project type before activity~~
- ~~Change title to create project~~
- ~~Mains rename to projects~~
- ~~Take out title~~
- ~~Take off related project~~
- ~~Move contract ddl before project type~~
- ~~Add facilities to contract type~~
- ~~Remove contract type from create page~~
- ~~Assign number on create instead of on town select~~
- ~~On create, popup modal that shows main number~~
- ~~Required: Project type, activity, asset~~
- ~~Joint trench as y/n ddl - required~~
- ~~NOTE: Some information is no longer being saved~~
- ~~Reg station might move to install page (unless it can be auto-generated)~~
- ~~Reg station is generated only if Activity is Install and Asset is Reg Station~~
- ~~If Activity is Abandon, show reg station field and set to required~~
- ~~Remove Identifier~~
- ~~if **Project Type** is set to **Abandonment**, the **Abandon Date** should be the same as the **Install Date** (Steve mentioned he can handle this in back end)~~
-->

> ###Details
- Make fields editable.
- For **Abandon Date** perhaps you can add field on the right that will append to the comments field
- Service Tab
	- Remove **Subdivision** and add **Address** (not currently in data)
	- Remove **Cross Street** and add **Installed Date** (not currently in data)
	- Add **Material** to table (not in Data? or associated with Activity)
- ~~Make the row of **Tasks** into a dropdown (same as services)~~

<!--
- TASKS:
	- Approve (was called Release)
	- Assign (was called Issue)
	- Install
	- Create Stub
	- Create Services (one Service per Main)
	- Create New Service Line
	- Create Special Service Line
	- Create Repair
	- Create Resource
	- Install Stubs
	- Cancel
-  ~~Update tabs to have border around them~~
- Evaluation tab:
	- ~~Cost, Investment, and Percent (from Approve page) goes here~~
	- ~~Period change to Year~~
	- ~~use MainDetails directive?~~
- Resource tab:
	- ~~Ability to delete & add resources (add directive to details page)~~
- Service Tab:
	- ~~include status~~
	- ~~List services in descending order~~
	- ~~if not services listed, show message saying "No Services related with this Project"~~
	- ~~Sort Services~~
- Services Tree???
- ~~Rename 'Create Stub' -> 'Create Stubs' & 'Create Services' -> 'Create Service'~~
- Basic Tab:
	- ~~add Cancel to picklist~~
	- ~~Disable Activity if it is set to **Cancel**~~
- ~~Add Task: Install Stubs~~
-->

> ###Approve (was called Release)
- Universal Invoice # can only be a # ???

<!--
- Also needs table originally from Create page (see Evaluation tab on the details page for what fields you need)
- does not save anything currently
- ~~needs to delete rows in MainDetail table - maybe not???~~
- ~~needs Add Materials~~
- ~~auto populate date with today's date~~
-->

<!-- > ###Assign (was called Issue) -->

<!--
- ~~Does not save Resource~~
- model.MainResources brings info from MainResources table AND Resources table. ~~When saving, however, I would think that only the data in MainResources would need to be added/updated (Type, Activity, ActivityDate, Main_Id, Resource_Id).~~
- ~~auto populate date with today's date~~
- ~~for the model.MainResource.ActivityDate, does this need a new input field on this page, or just use the current datetime from server?~~
- ~~remove 'Resource Type'~~
- ~~DDL will only show stuff for Assign~~
- ~~filter input - disable 'enter' functionality - instead have it go to (and possibly open) associated DDL~~
- ~~Resource:~~
	- ~~Exlude inactive people (done in backend)~~
	- ~~For Resource previously set, if inactive, still needs to show on page.  DDL should be able to replace old person.~~
	- ~~List by Last Name (done in back end)~~
-->

> ###Install
- **Pipe Coating** will go below Coating Exposure. Not Required.
- Needs correct installer list for installer DDL in table

<!--
- ~~Should 'Material Exposure', 'Coating Exposure', and 'Internal Corrosion' be select DDLs?~~
- Installer not saved
- needs Add Materials that was first added on 'Approve' task, **_PLUS_** 'actual' values.
- ~~Remove **Pipe** DDL~~
- ~~Remove **Work Order**~~
- ~~Remove **Invoice**~~
- ~~Remove **Activity Date**~~
- ~~Remove **Resource Type**~~
- ~~Rename **Material Exposure** to **External Exposure**~~
- ~~Order of DDLs~~
	1.	~~External~~
	-	~~Internal~~
	-	~~Coating~~
- ~~auto populate date with today's date~~
- ~~model.MainResources saves the first time you add a resource, but does not update.~~
- ~~Add *inspector* (NOT NEEDED: **Activity Date** or **Resource Type**)~~
- ~~Turn Material table into directive~~
- ~~filter input - do same as on Assign page~~
- ~~Rename **External Exposure** to **External Corrosion**~~
-->

> ###Create Stub
- Resource (same DDL from Assign)

<!--
- ~~Does not show previous data (instead Details page will show tree structure with related services - these will link to the serivces section to edit)~~
- ~~Needs to create association with Main_Id in backend~~
- ~~Remove Excess Flow Valve~~
- ~~Status_Date does not get field, but should default to today's date~~
- ~~Street Name is required~~
-->

<!-- > ###Cancel task: -->

<!--
- ~~Cancel Date & Comments~~
- ~~Saving this task also causes 'Activity' to 'Cancel'~~
-->

> ###Create Services
- Marketing Rep # -> DDL (needs data)
- Builder # -> DDL (needs data)

<!--
- ~~Remove **Excess Flow Valve**~~
- ~~Remove **Rush Request Date**~~
- ~~Rename **Issue Date** to **Assign Date**~~
- ~~Rename **Issue To Number** to **Assign To Number**~~
- ~~Remove checkbox -> Construction Zone Ind, Bore Ind, Statistic Sheet, Critical Line Ind~~
- ~~Assign To # -> DDL (from assign task)~~
- ~~Rename: _Meter Bank_ -> _Manifold_~~
- ~~Remove Leak Survey~~
-->

> ###Install Stub
- Needs to be updated so the **ServiceActivity** is first brought into the model, then updated on save so the **ServiceActivity** status is updated to *'Complete'*


<!--
##~~Paging~~
- ~~showResetButton bool must belong to parent... not directive~~
- ~~disableBackButtons & disableForwardButtons bool must belong to parent (scope.$parent might be used)~~
- ~~totalPages & totalRows should come from parent (one way bindng perhaps)~~
- ~~currentPage must belong to parent (scope.$parent might be used)~~
- ~~reset button not updating parameters before performing updateGridFunction()... perhaps we can use $parent['nameOfPostParameters']~~
-->
<!--
##~~Validation~~
- ~~Before submit:~~
	- ~~Should show error class (not popup) when $dirty and $invalid~~
	- ~~On correction, error class goes away~~
- ~~After submit:~~
	- ~~Should show error class when $invalid ($dirty or $pristine)~~
	- ~~Should show popover after submit and scroll to top~~
	- ~~On correction, error class goes away and popover goes away~~
-->

<!--
##Other

- - -

> ###Sublime Text
- ~~Plugin to change mduDirectiveAttribute to mdu-directive-attribute~~
-->
