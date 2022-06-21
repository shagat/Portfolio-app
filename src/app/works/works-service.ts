import { Injectable } from "@angular/core";
import { Work } from "./Work.model";

@Injectable({
    providedIn:('root')
})
export class WorksService {
    private works:Work[] = [
        new Work(
            'Heading-1',
            '../assets/rishabh-mathew-Foi2sqECfOA-unsplash.jpg',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dignissimos inventore, vero sint sed suscipit quaerat architecto nemo aspernatur cum quas nam recusandae, sit quod facere? Odit, temporibus omnis. Nobis repellat adipisci dolores iusto nemo et aspernatur dolor enim aliquid.',
            'some links to project 1',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nisi ipsam veritatis molestiae aliqui lkjkdsajhhi aisjdi0fe'
        ),
        new Work(
            'Heading-2',
            '../assets/rishabh-mathew-Foi2sqECfOA-unsplash.jpg',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dignissimos inventore, vero sint sed suscipit quaerat architecto nemo aspernatur cum quas nam recusandae, sit quod facere? Odit, temporibus omnis. Nobis repellat adipisci dolores iusto nemo et aspernatur dolor enim aliquid.',
            'some links to project 2',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nisi ipsam veritatis molestiae aliqui'
        ),
        new Work(
            'Heading-3',
            '../assets/rishabh-mathew-Foi2sqECfOA-unsplash.jpg',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dignissimos inventore, vero sint sed suscipit quaerat architecto nemo aspernatur cum quas nam recusandae, sit quod facere? Odit, temporibus omnis.',
            'some links to project 3',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nisi ipsam veritatis molestiae aliqui lkjkdsajhhi aisjdi0fe'
        )
    ]

    getWorks(){
        return this.works.slice();
    }
}