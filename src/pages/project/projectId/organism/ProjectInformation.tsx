import Typography from '@components/common/atom/Typography';
import { Code } from '@nextui-org/react';
import ProjectCreatorProfile from '@pages/project/projectId/molecule/ProjectCreatorProfile';
import { ProjectInformationWithCreatorType } from '@type';
import { Fragment } from 'react';

interface ProjectInformationProps {
  projectInformation: ProjectInformationWithCreatorType;
}

export default function ProjectInformation({
  projectInformation,
}: ProjectInformationProps) {
  const {
    introduce,
    startDate,
    endDate,
    openChattingLink,
    notionLink,
    githubLink,
    creatorSimpleProfileDto,
  } = projectInformation;
  return (
    <Fragment>
      <div className="w-full flex flex-col items-start gap-10 px-4">
        <div className="flex flex-col gap-3">
          <Typography variant="header03" fontColor="gray07">
            프로젝트 소개
          </Typography>
          <Typography variant="body02" fontColor="gray06">
            {introduce}
          </Typography>
        </div>
        <div className="flex flex-col gap-3">
          <Typography variant="header03" fontColor="gray07">
            프로젝트 기간
          </Typography>
          <Typography variant="body02" fontColor="gray06">
            {`${startDate} ~ ${endDate}`}
          </Typography>
        </div>
        <div className="flex flex-col gap-3">
          <Typography variant="header03" fontColor="gray07">
            소개 링크
          </Typography>
          <div className="flex flex-col gap-2">
            {openChattingLink !== '' ? (
              <Code className="flex gap-2 items-center px-4 py-2">
                <Typography
                  variant="body02"
                  fontColor="gray06"
                  as="a"
                  href={openChattingLink}
                >
                  {openChattingLink}
                </Typography>
              </Code>
            ) : null}
            {notionLink !== '' ? (
              <Code className="flex gap-2 items-center px-4 py-2">
                <Typography
                  variant="body02"
                  fontColor="gray06"
                  as="a"
                  href={notionLink}
                >
                  {notionLink}
                </Typography>
              </Code>
            ) : null}
            {githubLink !== '' ? (
              <Code className="flex gap-2 items-center px-4 py-2">
                <Typography
                  variant="body02"
                  fontColor="gray06"
                  as="a"
                  href={githubLink}
                >
                  {githubLink}
                </Typography>
              </Code>
            ) : null}
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <Typography variant="header03" fontColor="gray07">
            프로젝트 생성자
          </Typography>
          <ProjectCreatorProfile {...creatorSimpleProfileDto} />
        </div>
      </div>
    </Fragment>
  );
}
