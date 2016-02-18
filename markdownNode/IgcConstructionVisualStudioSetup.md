# ICG Construction Setup

- [Install](#install)
- [Update Visual Studio](#update-visual-studio)
- [Set up Repository](#set-up-repository)
 - [Method 1: Through Visual Studio](#method-1-through-visual-studio)
 - [Method 2: Through Windows Explorer](#method-2-through-windows-explorer)
- [Visual Studio Solution Setup](#visual-studio-solution-setup)
 - [Method 1: Using the existing solution (.sln) file](#method-1-using-the-existing-solution-sln-file)
 - [Method 2: Creating a custom solution file](#method-2-creating-a-custom-solution-file)
 - [Enable NuGet Package Restore](#enable-nuget-package-restore)
 - [Troubleshooting the packages](#troubleshooting-the-packages)
- [Running the Project](#running-the-project)

## Install

> Visual Studio 2013 should already be installed.

> Download and install the following programs

> - [Tortoise SVN](http://tortoisesvn.net/)
- [Ankhsvn](https://ankhsvn.open.collab.net/) - Subversion plugin for Visual Studio


## Update Visual Studio

> - Open Visual Studio
- Go to **Tools > Extensions and Updates**
- Make sure Visual Studio is updated to the latest version
- Make sure **AnkhSVN** is installed
- Find and Install **Web Essentials 2013**


## Set up Repository


> ### Method 1: Through Visual Studio

> - In Visual Studio, click on **File > Subversion > Open from Subversion...**
- Click the **Add repository url** icon to the right of the **Url** field.
- Add the following url:
 - https://igc-boi-dev3.mdu.com/svn/WEB_IgcConstruction
- Click **Finish**
- You should now see a list of files and folders.
- Select **WebDomain_IgcConstruction.sln** and click **Open**
- In the next window, you may change the **Directory** if you like.
- Click **OK**
- The files will start to download (This may take some time).
- You may now skip to **[Enable NuGet Package Restore](#enable-nuget-package-restore)**

[](#space)

> ### Method 2: Through Windows Explorer

> - Create directory for files from repository (such as **C:\IgcDev**)
- Right click on that directory and select **SVN Checkout**
- For **URL of repository**, use the following URL:
 - https://igc-boi-dev3.mdu.com/svn/WEB_IgcConstruction
- **Checkout directory** should be set to the folder you just created
- **Checkout Depth** should be 'Fully recursive'
- **Revision** should be 'HEAD revision'
- Click **OK**
- This will download all files from the repository into your folder.


## Visual Studio Solution Setup


> ### Method 1: Using the existing solution (.sln) file

> - In Visual Studio, go to **File > Open Project...**
- Locate the SVN repository you just set up and open the file **WebDomain_IgcConstruction.sln**

[](#space)

> ### Method 2: Creating a custom solution file

> - Go to **File > Open Project**
- Navigate and select the following project file:
  	[repository path]\IgcConstruction.Web\IgcConstruction.Web.csproj
- Go to **File > Add > Existing Project...**
- Navigate and select the following project file:
  	[repository path]\IgcConstruction.Domain\IgcConstruction.Domain.csproj
- To save the Solution, click **File > Save All**.
- Save the Solution (.sln file) in the root folder of the repository path (such as **C:\IgcDev**).
- In the **Solution Explorer**, right click the **IgcConstruction.Web** project and go to **Build Dependencies > Project Dependencies**.
- On the **Dependencies** tab, under the **Projects** drop down you should have **IgcConstruction.Web** selected.
- Under **Depends on:**, check the box for **IgcContruction.Domain**
- Click **OK**

[](#space)

> ### Enable NuGet Package Restore

> - In the **Solution Explorer**, right click the solution and select **Enable NuGet Package Restore**. This may place a new .nuget folder in your solution if not there already.
- Click **OK** when the process is done.
- It sometimes helps to close Visual Studio and re-open. (If it asks you to save changes to the solution, go ahead and save the changes.)
- Open the Solution again (should now be under **Recent** on the left hand side of the start page).
- You should now be able to build and run the application. Skip down to **[Running the Project](#running-the-project)**

[](#space)

> ### Troubleshooting the packages

> - In the **Solution Explorer**, right click the solution and select **Manage NuGet Packages for Solution...**.  If the packages have not been downloaded, you will see a **Restore** button to restore packages.  Click the **Restore** button.  After it is done, close the **Manage NuGet Packages** window.
- Check to see if references are ok. If not, you may need to close Visual Studio, re-open it again, and try to re-build the solution.

>> If all else fails and the references are still broken, you may try opening **Tools > NuGet Package Manager > Package Manager Console** and use the following code:

>> 	Update-Package -Reinstall -ProjectName THE_PROJECT_NAME

>> Or, to reinstall the packages for all projects in your solution, just use:

>> 	Update-Package -Reinstall

>> Or, if you need to install a specific version of something:

>> 	Install-Package PACKAGE_NAME -Version VERSION_NUMBER



## Running the Project

> To run in Debug mode, go to **Debug > Start Debugging**.  You can also click on the green arrow in your toolbar.  The targeted browser name should appear to the right of the green arrow.  You can change your targeted browser by clicking on the small drop down arrow to the right of the browser name.

> If you are just making changes to the .cshtml files, you may not need to work in debug mode.  To start the project without debugging, open a .cshtml file and go to **Debug > Start Without Debugging**.  You can also right click on the .cshtml file in your **Solution Explorer** and select **View in Browser**.

> If you are already started the project **Without Debugging**, and you make changes to .cs files, all you need to do is rebuild.  To rebuild, right click the _Solution_ or one of the _Projects_ in the **Solution Explorer** and select **Rebuild**.

