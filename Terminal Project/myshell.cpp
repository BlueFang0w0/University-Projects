//Aleksandrs Lukjanovs - M00674847 - 2020-21 CST2555 Operating Systems and Computer Networks
//CompLab1/01 Tutor Name: Ahmed Eissa
//myshell , functions, makefile

#include <iostream>
#include <vector>
#include <unistd.h>
#include <stdio.h>
#include <limits.h>
#include <stdlib.h>
#include <sstream>
#include <fstream>
#include <ctype.h>
#include <regex>
#include <ios>
#include <filesystem>

//Some cosmetic shortcuts.
#define RESET "\e[m"
#define RED "\033[31m" 
#define GREEN "\033[32m" 

#define LOG(x) std::cout << x << std::endl // Allows me to define my own commands. That one simplifies printing.
#define LOGflat(x) std::cout << x << RESET// Print flat.

using namespace std;

#include "functions.cpp"

//MAIN STARTS HERE!!!
int main() {
	int Getlogin_r(char *buf, size_t bufsize);
	char Buffer[PATH_MAX];
	bool Main_Running = true;
	string Directory = Buffer;
	string Concat;
	string User_Input_Ref;
	ofstream Input ("~/.bashrc", ios_base::app | ios_base::out);
	
	vector<string> Input_Breakdown_Container{};
	
	//Main loop. When I quit I simply stop the loop.
	while(Main_Running == true){
		string User_Path = getcwd(Buffer, sizeof(Buffer));
		string Shell_Path = User_Path + "/myshell" ;
		
		CB_Request(Input_Breakdown_Container , User_Input_Ref, Shell_Path ); // Breaks down the user input by spaces into a vector.
		
		if(regex_match(Input_Breakdown_Container[0], regex("[a-zA-Z0-9]+"))){ 
		string SLF = Input_Breakdown_Container[Input_Breakdown_Container.size()-1];
		
		//Code below follows a fairly similar structure all over. It consists of error handling if's and the resulting command call if conditions are met.
		//Because of this reason I will only highlight bits that actually execute a command.
		
		// MY CD COMMAND!
			if(Input_Breakdown_Container[0] == "cd"  || Input_Breakdown_Container[0] == "Cd" || Input_Breakdown_Container[0] == "CD"){
				if(Input_Breakdown_Container.size() == 2 ){	
					if(filesystem::exists(Input_Breakdown_Container[1]) == true){
						Directory = chdir(Input_Breakdown_Container[1].c_str()); // Changes directory.
					}else{LOG(RED << "---=== ERROR: The provided directory: \"" + Input_Breakdown_Container[1] + "\" does not exist. Please enter a valid directory.!!! ===---" << RESET);};
				}
				else if(Input_Breakdown_Container.size() == 3 ){
					if(Input_Breakdown_Container[1] == "-def"){
						if(filesystem::exists(Input_Breakdown_Container[2]) == true){
							Input << "\"cd " + Input_Breakdown_Container[2] + "\"";
							Input.close();
							Concat = ("echo \"cd " + Input_Breakdown_Container[1] + "\" >> ~/.bashrc"); 
							system(Concat.c_str()); //Changes default directory if requested.
							LOG(GREEN << "Succesfully changed default directory." << RESET);
						}else{LOG(RED << "---=== ERROR: The provided directory: \"" + Input_Breakdown_Container[2] + "\" does not exist. Please enter a valid directory.!!! ===---" << RESET);};
					}else {LOG(RED << "---=== ERROR: Please enter the command correctly in format \"cd [options] [destination]\". Please try again!!! ===---" << RESET);}
				}else{LOG(Buffer);}
			}
			//MY COPY COMMAND!
			else if (Input_Breakdown_Container[0] == "copy" || Input_Breakdown_Container[0] == "Copy" || Input_Breakdown_Container[0] == "COPY"){
				if(Input_Breakdown_Container.size() == 3 ){
					if(filesystem::exists(Input_Breakdown_Container[1]) == true){
							if(filesystem::exists(Input_Breakdown_Container[2]) == true){
								if(filesystem::is_directory(Input_Breakdown_Container[1])){
									
									//The copy function is not propperly adapted in filesystem. As a result I had to optimize it.
									string Task = Input_Breakdown_Container[1] + "/"; 
									vector<char> Characters;
									vector<string> Sections;
									string Character_Mixer;
									char Previous;
									
									for(char& Char : Task){ 
										if(Char != '/'){ //Will push characters into a vector if they are not '/'.
											Characters.push_back(Char);
											Previous = Char;
										}else{
											if(Previous != '/'){ //Prevents repeats of //.
												Character_Mixer = {Characters.begin(), Characters.end()};
												Sections.push_back(Character_Mixer); //Push back my pack of characters into sections.
												Characters.clear(); //Clean up.
												Previous = '/'; //Part of preventing repeats.
											}
										}
									}
									string New_Name = "/" + Sections[Sections.size()-1]; //Formatting.
									
									filesystem::create_directory(Input_Breakdown_Container[2] + New_Name);// Fist make a new directory where desired.
									filesystem::copy(Input_Breakdown_Container[1], Input_Breakdown_Container[2] + New_Name, filesystem::copy_options::overwrite_existing | filesystem::copy_options::recursive); //Put all files into the new directory.
									LOG(GREEN << "Folder copy complete." << RESET);
								}else{filesystem::copy( Input_Breakdown_Container[1] , Input_Breakdown_Container[2] , filesystem::copy_options::overwrite_existing); LOG(GREEN << "File copy complete." << RESET);};
							}else{LOG(RED << "---=== ERROR: The provided destination directory: \"" + Input_Breakdown_Container[1] + "\" does not exist. Please enter a valid destination directory.!!! ===---" << RESET);};
						}else{LOG(RED << "---=== ERROR: The provided source directory: \"" + Input_Breakdown_Container[1] + "\" does not exist. Please enter a valid source directory.!!! ===---" << RESET);};
				}else{LOG(RED << "---=== ERROR: Please enter the command correctly in format \"copy [source] [destination]\". Please try again!!! ===---" << RESET);};
			}
			//MY MAKE DIRECTORY COMMAND!
			else if (Input_Breakdown_Container[0] == "md"  || Input_Breakdown_Container[0] == "Md"  || Input_Breakdown_Container[0] == "MD"){
				if(Input_Breakdown_Container.size() == 2 ){
					if(filesystem::exists(TTT_Request("..." , Input_Breakdown_Container[1])) == true){ 
						filesystem::create_directory(Input_Breakdown_Container[1]); // Creates directory.
						LOG(GREEN << "Folder created." << RESET);
					}else{LOG(RED << "---=== ERROR: The provided destination directory: \"" + Input_Breakdown_Container[1] + "\" does not exist. Please enter a valid destination directory.!!! ===---" << RESET);};
				}else{LOG(RED << "---=== ERROR: Please enter the command correctly in format \"md [directory]\". Please try again!!! ===---" << RESET);};
			}
			//MY REMOVE DIRECTORY COMMAND!
			else if (Input_Breakdown_Container[0] == "rd" || Input_Breakdown_Container[0] == "Rd" || Input_Breakdown_Container[0] == "RD"){
				if(Input_Breakdown_Container.size() == 2 ){
					if(filesystem::exists(Input_Breakdown_Container[1]) == true){
						if(filesystem::is_directory(Input_Breakdown_Container[1]) == true){
							if(filesystem::is_empty(Input_Breakdown_Container[1])){
								filesystem::remove(Input_Breakdown_Container[1]); //Removes directory.
							}else{LOG(RED << "---=== ERROR: The provided directory is not empty. Please try again!!! ===---" << RESET);}
						}else{filesystem::remove(Input_Breakdown_Container[1]); LOG(GREEN << "Removal of file complete." << RESET);}
					}else{LOG(RED << "---=== ERROR: The provided file or directory with the path: \"" + Input_Breakdown_Container[1] + "\" does not exist. Please enter a valid path.!!! ===---" << RESET);};
				}else{LOG(RED << "---=== ERROR: Please enter the command correctly in format \"rd [file or folder path]\". Please try again!!! ===---" << RESET);};
			}
			//MY LIST DIRECTORY CONTENT COMMAND.
			else if (Input_Breakdown_Container[0] == "dir" || Input_Breakdown_Container[0] == "Dir" || Input_Breakdown_Container[0] == "DIR"){
				if(Input_Breakdown_Container.size() == 2 ){
					if(filesystem::exists(Input_Breakdown_Container[1]) == true){
						for(auto& i: filesystem::directory_iterator(Input_Breakdown_Container[1])){ //Itterate through all file paths displaying them.
							LOG(GREEN << i.path() << RESET);
						}
					}else{LOG(RED << "---=== ERROR: The provided file or directory with the path: \"" + Input_Breakdown_Container[1] + "\" does not exist. Please enter a valid path.!!! ===---" << RESET);};
				}else{LOG(RED << "---=== ERROR: Please enter the command correctly in format \"dir [file or folder path]\". Please try again!!! ===---" << RESET);};
			}
			//MY CLEAR SCREEN COMMAND!
			else if (Input_Breakdown_Container[0] == "cls"  || Input_Breakdown_Container[0] == "Cls" || Input_Breakdown_Container[0] == "CLS"){system("clear");} //I find this method the cleanest. I suppose I could achive the same effect by spamming lines.
			//MY PRINT TO SCREEN COMMAND!
			else if (Input_Breakdown_Container[0] == "print" || Input_Breakdown_Container[0] == "Print" || Input_Breakdown_Container[0] == "PRINT"){ for(unsigned i = 1 ; i < Input_Breakdown_Container.size() ; i++){LOGflat(GREEN << Input_Breakdown_Container[i] + " "); } LOG(" ");} //Simply spits out anything after print command.
			//MY QUIT COMMAND!
			else if (Input_Breakdown_Container[0] == "quit"  || Input_Breakdown_Container[0] == "Quit" || Input_Breakdown_Container[0] == "QUIT"){Main_Running = false; break;} //Stop the loop to leave.
			
			else{system(User_Input_Ref.c_str());};//Simply feed output back to system if it does not match my commands.
		}
		else{ LOG(RED << "---=== ERROR: Invalid input. Please try again!!! ===---" << RESET); }
		
		Input_Breakdown_Container.clear(); //Clean up.
		
		
	}
	
	return 0;
}
