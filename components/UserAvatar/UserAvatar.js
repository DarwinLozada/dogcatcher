export default function UserAvatar({ avatarURL, username }) {
  return (
    <img
      src={avatarURL}
      alt={`${username} avatar`}
      className="rounded-full w-10"
    ></img>
  )
}
