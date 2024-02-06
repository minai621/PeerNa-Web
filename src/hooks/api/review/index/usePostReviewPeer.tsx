import { PeerGradeTypes } from '@store/reviewState';
import { useMutation } from '@tanstack/react-query';
import { ApiResponse, http } from '@utils/API';

interface ReviewPeerRequestDTO {
  targetUuid: string;
  answerIdList: number[];
  peerGrade: PeerGradeTypes;
  feedback: string;
  uuid: string;
}

interface ReviewPeerResponseDTO {
  peerTestId: number;
}

const postReviewPeer = async ({
  targetUuid,
  answerIdList,
  uuid,
  feedback,
  peerGrade,
}: ReviewPeerRequestDTO): Promise<ApiResponse<ReviewPeerResponseDTO>> => {
  return await http.post(`/review/peer-test?target-uuid=${targetUuid}`, {
    answerIdList,
    uuid,
    feedback,
    peerGrade,
  });
};

export default function usePostReviewPeer(
  successCallback?: () => void,
  errorCallback?: (error: Error) => void,
) {
  return useMutation({
    mutationFn: postReviewPeer,
    onSuccess: successCallback,
    onError: errorCallback,
  });
}