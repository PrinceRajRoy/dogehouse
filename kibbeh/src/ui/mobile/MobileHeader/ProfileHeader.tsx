import React from "react";
import {
  SolidMessages,
  SolidNotification,
  SolidSearch,
} from "../../../icons";
import { SingleUser } from "../../UserAvatar";

export interface ProfileHeaderProps {
  avatar: string;
  onAnnouncementsClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => null;
  onMessagesClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => null;
  onSearchClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => null;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  avatar,
  onAnnouncementsClick,
  onMessagesClick,
  onSearchClick,
}) => {
  return (
    <div className="w-full py-4 px-3 flex justify-between bg-primary-900">
      <div>
        <SingleUser size="xs" src={avatar} isOnline={true} />
      </div>
      <div className="flex gap-x-5">
        {onAnnouncementsClick && (
          <button onClick={onAnnouncementsClick}>
            <SolidNotification
              className="text-primary-100"
              height={20}
              width={20}
            />
          </button>
        )}
        {onMessagesClick && (
          <button onClick={onMessagesClick}>
            <SolidMessages
              className="text-primary-100"
              height={20}
              width={20}
            />
          </button>
        )}
        {onSearchClick && (
          <button onClick={onSearchClick}>
            <SolidSearch
              className="text-primary-100"
              height={20}
              width={20}
            />
          </button>
        )}
      </div>
    </div>
  );
};