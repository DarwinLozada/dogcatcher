export default function UserAvatar({ avatarURL, username, isStateActivated }) {
  return (
    <div className="relative">
      <img
        src={avatarURL}
        alt={`${username} avatar`}
        className={`transition-all duration-300 rounded-full w-10 ${
          isStateActivated && "ring-2 ring-hardPink"
        }`}
      ></img>
    </div>
  )
}
