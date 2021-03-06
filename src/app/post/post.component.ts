import { Component, Input, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() post: any;
  showHidden = false;

  constructor(
    public dialog: MdDialog,
    public vcr: ViewContainerRef
  ) { }

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

  textFormatter(text: any) {
    const paragraphs = text.split('\n');
    if (paragraphs.length - 5 > 0) {
      return {
        text: paragraphs.slice(1, 5),
        hidden: paragraphs.slice(5)
      }
    }
    return {text: paragraphs, hidden: ''}
  }

  likeClick(post) {
      const config = new MdDialogConfig();
      config.viewContainerRef = this.vcr;
      const dialogRef: MdDialogRef<ModalComponent> = this.dialog.open(ModalComponent, config);
      dialogRef.componentInstance.post = post;
  }

}
