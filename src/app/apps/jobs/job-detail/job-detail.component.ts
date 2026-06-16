import { Component, OnInit } from '@angular/core';
import { ServicejobService } from '../servicejob.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Job } from '../job-type';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './job-detail.component.html',
})
export class JobDetailComponent implements OnInit {
  id: any;
  jobDetail: Job;

  similarJobs: Job[] = [];

  constructor(
    activatedRouter: ActivatedRoute,
    private service: ServicejobService,
    public router: Router
  ) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
    this.jobDetail = this.service.getJobs().filter((x) => x.id === +this.id)[0];

    this.similarJobs = this.service.getJobs().filter((x) => x.id === +this.id);
  }

  ngOnInit(): void {
    this.similarJobs = this.service
      .getJobs()
      .filter((x) => x.jobNature === this.jobDetail.jobNature);
    this.similarJobs = this.similarJobs.filter((x) => x !== this.jobDetail);
  }
}
