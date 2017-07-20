import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Array<any>;

  constructor() { }

  showOriginal(post) {
    if (post.post_type === 'post') {
      window.open(`https://vk.com/wall${post.from_id}_${post.id}`, '_blank');
    }
  }

  checkAttachments(attachments: any, type: string) {
    for (let attachment of attachments) {
      if (attachment.type === type) {
        return true;
      }
    }
    return false;
  }

  checkPhotoAttachments(attachments: any) {
    const photoList = attachments.filter((attachment) => {
      if (attachment.type === 'photo') {
        return attachment.photo;
      }
    });

    if (photoList.length === 1) {
      return photoList;
    } else if (photoList.length > 1) {
      return photoList.map((element) => {
        return {
          thumbnail: element.photo.photo_75,
          image: element.photo.photo_604,
          text: element.photo.text
        }
      });
    }
    return [];
  }

  clickOnAudio(audio) {
    window.open(`https://www.youtube.com/results?search_query=${audio.artist} - ${audio.title}`, '_blank');
  }

  ngOnInit() {
  }

}
