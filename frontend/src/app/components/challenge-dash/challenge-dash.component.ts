import { Component, Input, OnInit } from '@angular/core';
import { Challenge } from '../../models/challenge.model';
import { ChallengeService } from '../../services/challenge.service'
import { UserService } from '../../services/user.service'
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'challenge-dash',
  templateUrl: './challenge-dash.component.html',
  styleUrls: ['./challenge-dash.component.css']
})
export class ChallengeDashComponent implements OnInit {
  //@Input() challenges: Challenge[] | null = null;

  @Input() challenges: number[] | null = null;

  creatingChallenge: boolean = false;
  challengeForm!: FormGroup;


  constructor(private challengeService: ChallengeService, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.challengeForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      theme: [null],
      tasks: ['', Validators.required],
      participants: this.formBuilder.array([]),
      // Add more form controls as needed
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.challengeForm.patchValue({
      fileUpload: file
    });
  }

  // Get participant based on index
  get participantsFormArray(): FormArray {
    return this.challengeForm.get('participants') as FormArray;
  }


  //
  // Adding participants
  //
  addParticipant() {
    const participantControl = this.formBuilder.control('', Validators.required);
    this.participantsFormArray.push(participantControl);
  }

  //
  // Removing Participants
  //
  removeParticipant(index: number) {
    this.participantsFormArray.removeAt(index);
  }

  async createChallenge(): Promise<void> {
    if (this.challengeForm.valid) {
      let data = this.challengeForm.value;

      try {
        // Adding extra data
        const response = await this.userService.getUserData().toPromise();
        data.creatorId = response.user._id;

        console.log('Challenge data as JSON:', JSON.stringify(data));

        this.challengeService.createChallenge(data).subscribe(
          (response) => {
            // handle response
          },
          (error) => {
            // Handle error
            console.error('Error creating challenge:', error);
          }
        );
      } catch (error) {
        // Handle error
        console.error('Error retrieving user information:', error);
      }
      
    }
  }

}
