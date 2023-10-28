"use client"

function UserPage({ params }: { params: { id: string } }) {
  return (
    <p>Usuario {params.id}</p>
  )
}

export default UserPage;
