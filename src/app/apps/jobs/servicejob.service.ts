import { NgModule, Injectable } from '@angular/core';
import { Job } from './job-type';
import { jobData } from './job-data';


@Injectable({
    providedIn: 'root'
})

export class ServicejobService {

    jobs: Job[] = jobData;

    public getJobs() {
        return this.jobs;
    }
}
